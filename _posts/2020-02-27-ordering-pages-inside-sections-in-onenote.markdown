---
layout: post
title:  "Ordering pages inside sections in OneNote 2016"
date:   2020-02-27 00:00:20 +0100
---
Out of the box, OneNote 2016 does not offer a way to order pages inside a section. Various for-pay plugins exists which enables this, but as a cheaper alternative, I have written a small [Linqpad](https://www.linqpad.net) program to do it. 

This is not exactly "best practice" code, but it gets the job done. 

The code uses the OneNote client API, so it must run on a machine with OneNote 2016 installed and the relevant notebook open.
{% highlight csharp %}
private static XNamespace One {get;} = "http://schemas.microsoft.com/office/onenote/2013/onenote";

static void Main(string[] args)
{
	OrderPagesByCriteria("<my section name>", OrderCriteria.Name, OrderDirection.Ascending);	
}

enum OrderCriteria
{
	Name,
	Date,
}

enum OrderDirection
{
	Ascending,
	Descending
}

static Dictionary<string,string> GetSections()
{
	var app = new Microsoft.Office.Interop.OneNote.Application();
	app.GetHierarchy("", HierarchyScope.hsSections, out string hierarchyXml);
	var hierarchy = XDocument.Parse(hierarchyXml);
	var sections = hierarchy.Descendants().Where(d => d.Name == One + "Section");
	var sectionNames = sections.ToDictionary(s => s.Attribute("name").Value, s => s.Attribute("ID").Value);
	return sectionNames;
}

static void OrderPagesByCriteria(string sectionName, OrderCriteria orderCriteria, OrderDirection orderDirection)
{
	var sectionIdLookup = GetSections();
	var sectionId = sectionIdLookup.ContainsKey(sectionName) ? sectionIdLookup[sectionName] : null;
	if (sectionId == null)
	{
		$"Section {sectionName} not found".Dump();
		return;
	}
	var app = new Microsoft.Office.Interop.OneNote.Application();
	app.GetHierarchy(sectionId, HierarchyScope.hsPages, out string sectionPageHierarchyXml);
	var hierarchy = XDocument.Parse(sectionPageHierarchyXml);
	var oldHierarchyXml = hierarchy.ToString();

	var pages = hierarchy.Root.Elements().Where(d => d.Name == One + "Page").ToList();

	pages.ForEach(p => p.Remove());

	Func<XElement, string> orderValuePicker;
	
	switch (orderCriteria)
	{
		case OrderCriteria.Date:
			orderValuePicker = (page) => page.Attribute("dateTime").Value;
			break;
		case OrderCriteria.Name:
			orderValuePicker = (page) => page.Attribute("name").Value;
			break;
		default:
			throw new Exception("Specify OrderCriteria");
	}
	
	var orderedPages = orderDirection == OrderDirection.Ascending ? 
		pages.OrderBy(p => orderValuePicker(p), StringComparer.OrdinalIgnoreCase).ToList() :
		pages.OrderByDescending(p => orderValuePicker(p), StringComparer.OrdinalIgnoreCase).ToList();
	orderedPages.ForEach(p => hierarchy.Root.Add(p));
	var newHierarchyXml = hierarchy.ToString();
	
	if (oldHierarchyXml.Length != newHierarchyXml.Length)
	{
		"Lengths of old and new hierarchy does not match, aborting".Dump();
		return;
	}
	app.UpdateHierarchy(newHierarchyXml);
	$"Pages in section {sectionName} reordered by {orderCriteria} {orderDirection}".Dump();
}

{% endhighlight %}
