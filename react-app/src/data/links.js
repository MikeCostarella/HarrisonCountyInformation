// Harrison County, Ohio — curated directory of meaningful links.
// Single source of truth for the app. Keep entries verified and current.
// Fields: name, category, subcategory, url, description
// Last reviewed: 2026-07-20

export const CATEGORIES = [
  "Government",
  "Education",
  "Health",
  "Business & Economy",
  "Community & Social",
  "Recreation & Tourism",
  "News & Media",
];

// The vendor that hosts the county Auditor's online parcel/property records.
export const AUDITOR_VENDOR = "Harrison County Auditor (reaweb)";

export const LINKS = [
  // ---------- Government ----------
  { name: "Harrison County (Official Site)", category: "Government", subcategory: "County", url: "https://www.harrisoncountyohio.gov/", description: "Official government portal for Harrison County, Ohio (county seat: Cadiz)." },
  { name: "Harrison County Auditor", category: "Government", subcategory: "Auditor", url: "https://www.harrisoncountyohio.gov/county-auditor", description: "Property records, valuations, appraisals, and the online real-estate tax search." },
  { name: "Harrison County Board of Elections", category: "Government", subcategory: "Elections", url: "https://www.boe.ohio.gov/harrison/", description: "Voter registration, polling locations, and election administration." },
  // ---------- Education ----------
  { name: "Puskarich Public Library System", category: "Education", subcategory: "Library", url: "https://www.harrison.lib.oh.us/", description: "County public library system with branches in Cadiz, Scio, and Freeport." },
  { name: "Harrison Hills City Schools", category: "Education", subcategory: "K-12", url: "https://www.hhcsd.org/", description: "Countywide public school district serving Harrison County from Cadiz." },
  // ---------- Health ----------
  { name: "Harrison County Health Department", category: "Health", subcategory: "Public Health", url: "https://www.harrisoncountyohio.gov/health-department/", description: "County public-health agency: clinics, inspections, vital records, and programs." },
  { name: "WVU Medicine Harrison Community Hospital", category: "Health", subcategory: "Hospital", url: "https://wvumedicine.org/harrison-community-hospital/", description: "Community hospital in Cadiz, part of the WVU Medicine health system." },
  // ---------- Business & Economy ----------
  { name: "Harrison County Community Improvement Corporation", category: "Business & Economy", subcategory: "Economic Development", url: "https://www.harrisoncountyohio.gov/cic-information", description: "County CIC supporting business development, financing, and job creation." },
  // ---------- Community & Social ----------
  { name: "OhioMeansJobs Harrison County", category: "Community & Social", subcategory: "Workforce", url: "https://ohiomeansjobs.ohio.gov/job-seekers/find-a-job/local-help/harrison-county", description: "Workforce, job-search, and employment services for county residents." },
  // ---------- Recreation & Tourism ----------
  { name: "Visit Harrison County", category: "Recreation & Tourism", subcategory: "Tourism", url: "https://visitharrisoncounty.com/", description: "Official visitor guide to attractions, events, and the outdoors across Harrison County." },
  { name: "Tappan Lake Park (MWCD)", category: "Recreation & Tourism", subcategory: "Parks", url: "https://www.mwcd.org/locations/tappan-lake-park", description: "Muskingum Watershed reservoir and park in Harrison County — boating, fishing, and camping." },
  // ---------- News & Media ----------
  { name: "Harrison County News (Your Ohio News)", category: "News & Media", subcategory: "News", url: "https://www.yourohionews.com/harrison-county", description: "Local news coverage of Harrison County events, government, and community." },
];
