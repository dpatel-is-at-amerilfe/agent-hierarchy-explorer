import type { AgentHierarchyRecord } from "../types/hierarchy";

/**
 * Mock data: 200 carrier-specific hierarchy rows across 150 distinct people (by NPN).
 * Identity rule: agentNpn = stable person identity; agentId may vary per carrier row.
 * Replace this array with an API response of the same shape to go live.
 */
export const agentHierarchyRecords: AgentHierarchyRecord[] = [
  {
    "rowId": "HR-0010",
    "rootOrg": "AmeriLife",
    "agentName": "Mia Garcia",
    "agentNpn": "2625792787",
    "agentId": "AGT-DH-2787-010",
    "parentAgentNpn": null,
    "levelName": "IMO / Top Agency",
    "levelId": 1,
    "lineOfBusiness": "PDP",
    "affiliateId": "AFF-010",
    "affiliateName": "Blue Ridge Benefit Group",
    "carrier": "Devoted Health",
    "status": "Active",
    "state": "NC",
    "effectiveDate": "2020-07-30",
    "terminationDate": null,
    "productionYtd": 143974,
    "policiesYtd": 33,
    "allAgentIdsForNpn": [
      "AGT-DH-2787-010"
    ],
    "carriersForNpn": [
      "Devoted Health"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Blue Ridge Benefit Group > Mia Garcia",
    "hierarchyPathCarrierFirst": "AmeriLife > Devoted Health > Blue Ridge Benefit Group > Mia Garcia",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0020",
    "rootOrg": "AmeriLife",
    "agentName": "Skyler Adams",
    "agentNpn": "2351531223",
    "agentId": "AGT-W-1223-020",
    "parentAgentNpn": null,
    "levelName": "Agency Principal",
    "levelId": 2,
    "lineOfBusiness": "Annuity",
    "affiliateId": "AFF-010",
    "affiliateName": "Blue Ridge Benefit Group",
    "carrier": "Wellcare",
    "status": "Pending",
    "state": "MI",
    "effectiveDate": "2023-05-07",
    "terminationDate": null,
    "productionYtd": 172999,
    "policiesYtd": 125,
    "allAgentIdsForNpn": [
      "AGT-W-1223-020"
    ],
    "carriersForNpn": [
      "Wellcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Blue Ridge Benefit Group > Skyler Adams",
    "hierarchyPathCarrierFirst": "AmeriLife > Wellcare > Blue Ridge Benefit Group > Skyler Adams",
    "lineageHealth": "Pending"
  },
  {
    "rowId": "HR-0030",
    "rootOrg": "AmeriLife",
    "agentName": "Zoe Evans",
    "agentNpn": "4919706735",
    "agentId": "AGT-H-6735-030",
    "parentAgentNpn": null,
    "levelName": "Agency Principal",
    "levelId": 2,
    "lineOfBusiness": "Annuity",
    "affiliateId": "AFF-010",
    "affiliateName": "Blue Ridge Benefit Group",
    "carrier": "Humana",
    "status": "Terminated",
    "state": "MA",
    "effectiveDate": "2023-09-07",
    "terminationDate": "2026-08-01",
    "productionYtd": 99617,
    "policiesYtd": 81,
    "allAgentIdsForNpn": [
      "AGT-H-6735-030"
    ],
    "carriersForNpn": [
      "Humana"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Blue Ridge Benefit Group > Zoe Evans",
    "hierarchyPathCarrierFirst": "AmeriLife > Humana > Blue Ridge Benefit Group > Zoe Evans",
    "lineageHealth": "At Risk"
  },
  {
    "rowId": "HR-0050",
    "rootOrg": "AmeriLife",
    "agentName": "Isabella Davis",
    "agentNpn": "9008612465",
    "agentId": "AGT-C-2465-050",
    "parentAgentNpn": "2625792787",
    "levelName": "Regional Manager",
    "levelId": 3,
    "lineOfBusiness": "PDP",
    "affiliateId": "AFF-010",
    "affiliateName": "Blue Ridge Benefit Group",
    "carrier": "Cigna",
    "status": "Active",
    "state": "TN",
    "effectiveDate": "2021-01-04",
    "terminationDate": null,
    "productionYtd": 195947,
    "policiesYtd": 106,
    "allAgentIdsForNpn": [
      "AGT-C-2465-050",
      "AGT-U-2465-182"
    ],
    "carriersForNpn": [
      "Cigna",
      "UnitedHealthcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Blue Ridge Benefit Group > Mia Garcia > Isabella Davis",
    "hierarchyPathCarrierFirst": "AmeriLife > Cigna > Blue Ridge Benefit Group > Isabella Davis",
    "lineageHealth": "High Performing"
  },
  {
    "rowId": "HR-0182",
    "rootOrg": "AmeriLife",
    "agentName": "Isabella Davis",
    "agentNpn": "9008612465",
    "agentId": "AGT-U-2465-182",
    "parentAgentNpn": "2625792787",
    "levelName": "Regional Manager",
    "levelId": 3,
    "lineOfBusiness": "PDP",
    "affiliateId": "AFF-010",
    "affiliateName": "Blue Ridge Benefit Group",
    "carrier": "UnitedHealthcare",
    "status": "Active",
    "state": "TN",
    "effectiveDate": "2025-01-16",
    "terminationDate": null,
    "productionYtd": 116376,
    "policiesYtd": 195,
    "allAgentIdsForNpn": [
      "AGT-C-2465-050",
      "AGT-U-2465-182"
    ],
    "carriersForNpn": [
      "Cigna",
      "UnitedHealthcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Blue Ridge Benefit Group > Mia Garcia > Isabella Davis",
    "hierarchyPathCarrierFirst": "AmeriLife > UnitedHealthcare > Blue Ridge Benefit Group > Isabella Davis",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0060",
    "rootOrg": "AmeriLife",
    "agentName": "Maya Singh",
    "agentNpn": "6583444930",
    "agentId": "AGT-W-4930-060",
    "parentAgentNpn": "2625792787",
    "levelName": "Regional Manager",
    "levelId": 3,
    "lineOfBusiness": "Medicare Supplement",
    "affiliateId": "AFF-010",
    "affiliateName": "Blue Ridge Benefit Group",
    "carrier": "Wellcare",
    "status": "Active",
    "state": "CA",
    "effectiveDate": "2024-07-30",
    "terminationDate": null,
    "productionYtd": 11887,
    "policiesYtd": 9,
    "allAgentIdsForNpn": [
      "AGT-W-4930-060"
    ],
    "carriersForNpn": [
      "Wellcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Blue Ridge Benefit Group > Mia Garcia > Maya Singh",
    "hierarchyPathCarrierFirst": "AmeriLife > Wellcare > Blue Ridge Benefit Group > Maya Singh",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0040",
    "rootOrg": "AmeriLife",
    "agentName": "Morgan Miller",
    "agentNpn": "2419179580",
    "agentId": "AGT-W-9580-040",
    "parentAgentNpn": "2625792787",
    "levelName": "Regional Manager",
    "levelId": 3,
    "lineOfBusiness": "Medicare Advantage",
    "affiliateId": "AFF-010",
    "affiliateName": "Blue Ridge Benefit Group",
    "carrier": "Wellcare",
    "status": "Active",
    "state": "NC",
    "effectiveDate": "2026-02-16",
    "terminationDate": null,
    "productionYtd": 115796,
    "policiesYtd": 88,
    "allAgentIdsForNpn": [
      "AGT-W-9580-040"
    ],
    "carriersForNpn": [
      "Wellcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Blue Ridge Benefit Group > Mia Garcia > Morgan Miller",
    "hierarchyPathCarrierFirst": "AmeriLife > Wellcare > Blue Ridge Benefit Group > Morgan Miller",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0090",
    "rootOrg": "AmeriLife",
    "agentName": "Elijah Roberts",
    "agentNpn": "6679017210",
    "agentId": "AGT-A-7210-090",
    "parentAgentNpn": "9008612465",
    "levelName": "District Manager",
    "levelId": 4,
    "lineOfBusiness": "Medicare Advantage",
    "affiliateId": "AFF-010",
    "affiliateName": "Blue Ridge Benefit Group",
    "carrier": "Anthem",
    "status": "Pending",
    "state": "GA",
    "effectiveDate": "2021-06-16",
    "terminationDate": null,
    "productionYtd": 153738,
    "policiesYtd": 143,
    "allAgentIdsForNpn": [
      "AGT-A-7210-090",
      "AGT-DH-7210-173"
    ],
    "carriersForNpn": [
      "Anthem",
      "Devoted Health"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Blue Ridge Benefit Group > Mia Garcia > Isabella Davis > Elijah Roberts",
    "hierarchyPathCarrierFirst": "AmeriLife > Anthem > Blue Ridge Benefit Group > Elijah Roberts",
    "lineageHealth": "Pending"
  },
  {
    "rowId": "HR-0173",
    "rootOrg": "AmeriLife",
    "agentName": "Elijah Roberts",
    "agentNpn": "6679017210",
    "agentId": "AGT-DH-7210-173",
    "parentAgentNpn": "9008612465",
    "levelName": "District Manager",
    "levelId": 4,
    "lineOfBusiness": "Annuity",
    "affiliateId": "AFF-010",
    "affiliateName": "Blue Ridge Benefit Group",
    "carrier": "Devoted Health",
    "status": "Active",
    "state": "GA",
    "effectiveDate": "2020-11-19",
    "terminationDate": null,
    "productionYtd": 215571,
    "policiesYtd": 46,
    "allAgentIdsForNpn": [
      "AGT-A-7210-090",
      "AGT-DH-7210-173"
    ],
    "carriersForNpn": [
      "Anthem",
      "Devoted Health"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Blue Ridge Benefit Group > Mia Garcia > Isabella Davis > Elijah Roberts",
    "hierarchyPathCarrierFirst": "AmeriLife > Devoted Health > Blue Ridge Benefit Group > Elijah Roberts",
    "lineageHealth": "High Performing"
  },
  {
    "rowId": "HR-0080",
    "rootOrg": "AmeriLife",
    "agentName": "Mark Rivera",
    "agentNpn": "9462806178",
    "agentId": "AGT-DH-6178-080",
    "parentAgentNpn": "6583444930",
    "levelName": "District Manager",
    "levelId": 4,
    "lineOfBusiness": "ACA",
    "affiliateId": "AFF-010",
    "affiliateName": "Blue Ridge Benefit Group",
    "carrier": "Devoted Health",
    "status": "Active",
    "state": "PA",
    "effectiveDate": "2024-07-03",
    "terminationDate": null,
    "productionYtd": 28301,
    "policiesYtd": 125,
    "allAgentIdsForNpn": [
      "AGT-DH-6178-080"
    ],
    "carriersForNpn": [
      "Devoted Health"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Blue Ridge Benefit Group > Mia Garcia > Maya Singh > Mark Rivera",
    "hierarchyPathCarrierFirst": "AmeriLife > Devoted Health > Blue Ridge Benefit Group > Mark Rivera",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0070",
    "rootOrg": "AmeriLife",
    "agentName": "Quinn Rodriguez",
    "agentNpn": "3373077218",
    "agentId": "AGT-A-7218-070",
    "parentAgentNpn": "4919706735",
    "levelName": "District Manager",
    "levelId": 4,
    "lineOfBusiness": "Dental/Vision",
    "affiliateId": "AFF-010",
    "affiliateName": "Blue Ridge Benefit Group",
    "carrier": "Allstate",
    "status": "Active",
    "state": "OH",
    "effectiveDate": "2022-04-20",
    "terminationDate": null,
    "productionYtd": 200581,
    "policiesYtd": 141,
    "allAgentIdsForNpn": [
      "AGT-A-7218-070",
      "AGT-C-7218-165"
    ],
    "carriersForNpn": [
      "Allstate",
      "Cigna"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Blue Ridge Benefit Group > Zoe Evans > Quinn Rodriguez",
    "hierarchyPathCarrierFirst": "AmeriLife > Allstate > Blue Ridge Benefit Group > Quinn Rodriguez",
    "lineageHealth": "High Performing"
  },
  {
    "rowId": "HR-0165",
    "rootOrg": "AmeriLife",
    "agentName": "Quinn Rodriguez",
    "agentNpn": "3373077218",
    "agentId": "AGT-C-7218-165",
    "parentAgentNpn": "4919706735",
    "levelName": "District Manager",
    "levelId": 4,
    "lineOfBusiness": "ACA",
    "affiliateId": "AFF-010",
    "affiliateName": "Blue Ridge Benefit Group",
    "carrier": "Cigna",
    "status": "Active",
    "state": "OH",
    "effectiveDate": "2021-07-06",
    "terminationDate": null,
    "productionYtd": 203473,
    "policiesYtd": 117,
    "allAgentIdsForNpn": [
      "AGT-A-7218-070",
      "AGT-C-7218-165"
    ],
    "carriersForNpn": [
      "Allstate",
      "Cigna"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Blue Ridge Benefit Group > Zoe Evans > Quinn Rodriguez",
    "hierarchyPathCarrierFirst": "AmeriLife > Cigna > Blue Ridge Benefit Group > Quinn Rodriguez",
    "lineageHealth": "High Performing"
  },
  {
    "rowId": "HR-0100",
    "rootOrg": "AmeriLife",
    "agentName": "Nora Taylor",
    "agentNpn": "7533932947",
    "agentId": "AGT-A-2947-100",
    "parentAgentNpn": "6583444930",
    "levelName": "Agent",
    "levelId": 5,
    "lineOfBusiness": "Medicare Supplement",
    "affiliateId": "AFF-010",
    "affiliateName": "Blue Ridge Benefit Group",
    "carrier": "Aetna",
    "status": "Terminated",
    "state": "MI",
    "effectiveDate": "2021-01-10",
    "terminationDate": "2023-01-03",
    "productionYtd": 98617,
    "policiesYtd": 107,
    "allAgentIdsForNpn": [
      "AGT-A-2947-100"
    ],
    "carriersForNpn": [
      "Aetna"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Blue Ridge Benefit Group > Mia Garcia > Maya Singh > Nora Taylor",
    "hierarchyPathCarrierFirst": "AmeriLife > Aetna > Blue Ridge Benefit Group > Nora Taylor",
    "lineageHealth": "At Risk"
  },
  {
    "rowId": "HR-0164",
    "rootOrg": "AmeriLife",
    "agentName": "Charlotte Nelson",
    "agentNpn": "5083595988",
    "agentId": "AGT-A-5988-164",
    "parentAgentNpn": "9462806178",
    "levelName": "Writing Agent",
    "levelId": 6,
    "lineOfBusiness": "ACA",
    "affiliateId": "AFF-010",
    "affiliateName": "Blue Ridge Benefit Group",
    "carrier": "Anthem",
    "status": "Terminated",
    "state": "VA",
    "effectiveDate": "2021-12-18",
    "terminationDate": "2023-10-04",
    "productionYtd": 125444,
    "policiesYtd": 161,
    "allAgentIdsForNpn": [
      "AGT-A-5988-164",
      "AGT-DH-5988-150"
    ],
    "carriersForNpn": [
      "Anthem",
      "Devoted Health"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Blue Ridge Benefit Group > Mia Garcia > Maya Singh > Mark Rivera > Charlotte Nelson",
    "hierarchyPathCarrierFirst": "AmeriLife > Anthem > Blue Ridge Benefit Group > Charlotte Nelson",
    "lineageHealth": "At Risk"
  },
  {
    "rowId": "HR-0150",
    "rootOrg": "AmeriLife",
    "agentName": "Charlotte Nelson",
    "agentNpn": "5083595988",
    "agentId": "AGT-DH-5988-150",
    "parentAgentNpn": "9462806178",
    "levelName": "Writing Agent",
    "levelId": 6,
    "lineOfBusiness": "Annuity",
    "affiliateId": "AFF-010",
    "affiliateName": "Blue Ridge Benefit Group",
    "carrier": "Devoted Health",
    "status": "Active",
    "state": "VA",
    "effectiveDate": "2023-02-28",
    "terminationDate": null,
    "productionYtd": 138270,
    "policiesYtd": 107,
    "allAgentIdsForNpn": [
      "AGT-A-5988-164",
      "AGT-DH-5988-150"
    ],
    "carriersForNpn": [
      "Anthem",
      "Devoted Health"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Blue Ridge Benefit Group > Mia Garcia > Maya Singh > Mark Rivera > Charlotte Nelson",
    "hierarchyPathCarrierFirst": "AmeriLife > Devoted Health > Blue Ridge Benefit Group > Charlotte Nelson",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0110",
    "rootOrg": "AmeriLife",
    "agentName": "Charlotte Turner",
    "agentNpn": "1116402431",
    "agentId": "AGT-C-2431-110",
    "parentAgentNpn": "9008612465",
    "levelName": "Writing Agent",
    "levelId": 6,
    "lineOfBusiness": "Annuity",
    "affiliateId": "AFF-010",
    "affiliateName": "Blue Ridge Benefit Group",
    "carrier": "Cigna",
    "status": "Active",
    "state": "MI",
    "effectiveDate": "2021-06-13",
    "terminationDate": null,
    "productionYtd": 184463,
    "policiesYtd": 58,
    "allAgentIdsForNpn": [
      "AGT-C-2431-110"
    ],
    "carriersForNpn": [
      "Cigna"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Blue Ridge Benefit Group > Mia Garcia > Isabella Davis > Charlotte Turner",
    "hierarchyPathCarrierFirst": "AmeriLife > Cigna > Blue Ridge Benefit Group > Charlotte Turner",
    "lineageHealth": "High Performing"
  },
  {
    "rowId": "HR-0174",
    "rootOrg": "AmeriLife",
    "agentName": "Elijah Garcia",
    "agentNpn": "5471357886",
    "agentId": "AGT-A-7886-174",
    "parentAgentNpn": "6679017210",
    "levelName": "Writing Agent",
    "levelId": 6,
    "lineOfBusiness": "Medicare Advantage",
    "affiliateId": "AFF-010",
    "affiliateName": "Blue Ridge Benefit Group",
    "carrier": "Allstate",
    "status": "Active",
    "state": "NC",
    "effectiveDate": "2023-04-18",
    "terminationDate": null,
    "productionYtd": 20989,
    "policiesYtd": 83,
    "allAgentIdsForNpn": [
      "AGT-A-7886-174",
      "AGT-C-7886-120"
    ],
    "carriersForNpn": [
      "Allstate",
      "Cigna"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Blue Ridge Benefit Group > Mia Garcia > Isabella Davis > Elijah Roberts > Elijah Garcia",
    "hierarchyPathCarrierFirst": "AmeriLife > Allstate > Blue Ridge Benefit Group > Elijah Garcia",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0120",
    "rootOrg": "AmeriLife",
    "agentName": "Elijah Garcia",
    "agentNpn": "5471357886",
    "agentId": "AGT-C-7886-120",
    "parentAgentNpn": "6679017210",
    "levelName": "Writing Agent",
    "levelId": 6,
    "lineOfBusiness": "Medicare Supplement",
    "affiliateId": "AFF-010",
    "affiliateName": "Blue Ridge Benefit Group",
    "carrier": "Cigna",
    "status": "Active",
    "state": "NC",
    "effectiveDate": "2022-08-25",
    "terminationDate": null,
    "productionYtd": 67100,
    "policiesYtd": 50,
    "allAgentIdsForNpn": [
      "AGT-A-7886-174",
      "AGT-C-7886-120"
    ],
    "carriersForNpn": [
      "Allstate",
      "Cigna"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Blue Ridge Benefit Group > Mia Garcia > Isabella Davis > Elijah Roberts > Elijah Garcia",
    "hierarchyPathCarrierFirst": "AmeriLife > Cigna > Blue Ridge Benefit Group > Elijah Garcia",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0130",
    "rootOrg": "AmeriLife",
    "agentName": "Nina Baker",
    "agentNpn": "6715705115",
    "agentId": "AGT-C-5115-130",
    "parentAgentNpn": "6583444930",
    "levelName": "Writing Agent",
    "levelId": 6,
    "lineOfBusiness": "Medicare Advantage",
    "affiliateId": "AFF-010",
    "affiliateName": "Blue Ridge Benefit Group",
    "carrier": "Cigna",
    "status": "Active",
    "state": "IL",
    "effectiveDate": "2020-09-10",
    "terminationDate": null,
    "productionYtd": 212590,
    "policiesYtd": 230,
    "allAgentIdsForNpn": [
      "AGT-C-5115-130"
    ],
    "carriersForNpn": [
      "Cigna"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Blue Ridge Benefit Group > Mia Garcia > Maya Singh > Nina Baker",
    "hierarchyPathCarrierFirst": "AmeriLife > Cigna > Blue Ridge Benefit Group > Nina Baker",
    "lineageHealth": "High Performing"
  },
  {
    "rowId": "HR-0140",
    "rootOrg": "AmeriLife",
    "agentName": "Sophia Hall",
    "agentNpn": "9196963901",
    "agentId": "AGT-A-3901-140",
    "parentAgentNpn": "6583444930",
    "levelName": "Writing Agent",
    "levelId": 6,
    "lineOfBusiness": "Life",
    "affiliateId": "AFF-010",
    "affiliateName": "Blue Ridge Benefit Group",
    "carrier": "Ameritas",
    "status": "Terminated",
    "state": "TX",
    "effectiveDate": "2021-01-17",
    "terminationDate": "2023-06-02",
    "productionYtd": 133297,
    "policiesYtd": 92,
    "allAgentIdsForNpn": [
      "AGT-A-3901-140"
    ],
    "carriersForNpn": [
      "Ameritas"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Blue Ridge Benefit Group > Mia Garcia > Maya Singh > Sophia Hall",
    "hierarchyPathCarrierFirst": "AmeriLife > Ameritas > Blue Ridge Benefit Group > Sophia Hall",
    "lineageHealth": "At Risk"
  },
  {
    "rowId": "HR-0008",
    "rootOrg": "AmeriLife",
    "agentName": "Drew Davis",
    "agentNpn": "2445662585",
    "agentId": "AGT-A-2585-008",
    "parentAgentNpn": null,
    "levelName": "IMO / Top Agency",
    "levelId": 1,
    "lineOfBusiness": "Life",
    "affiliateId": "AFF-008",
    "affiliateName": "Bridgeway Health Partners",
    "carrier": "Aetna",
    "status": "Active",
    "state": "NY",
    "effectiveDate": "2026-01-31",
    "terminationDate": null,
    "productionYtd": 14209,
    "policiesYtd": 48,
    "allAgentIdsForNpn": [
      "AGT-A-2585-008"
    ],
    "carriersForNpn": [
      "Aetna"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Bridgeway Health Partners > Drew Davis",
    "hierarchyPathCarrierFirst": "AmeriLife > Aetna > Bridgeway Health Partners > Drew Davis",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0195",
    "rootOrg": "AmeriLife",
    "agentName": "Jessica Stewart",
    "agentNpn": "4332894265",
    "agentId": "AGT-A-4265-195",
    "parentAgentNpn": null,
    "levelName": "Agency Principal",
    "levelId": 2,
    "lineOfBusiness": "Dental/Vision",
    "affiliateId": "AFF-008",
    "affiliateName": "Bridgeway Health Partners",
    "carrier": "Ameritas",
    "status": "Active",
    "state": "FL",
    "effectiveDate": "2025-11-23",
    "terminationDate": null,
    "productionYtd": 107330,
    "policiesYtd": 210,
    "allAgentIdsForNpn": [
      "AGT-A-4265-195",
      "AGT-C-4265-018"
    ],
    "carriersForNpn": [
      "Ameritas",
      "Cigna"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Bridgeway Health Partners > Jessica Stewart",
    "hierarchyPathCarrierFirst": "AmeriLife > Ameritas > Bridgeway Health Partners > Jessica Stewart",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0018",
    "rootOrg": "AmeriLife",
    "agentName": "Jessica Stewart",
    "agentNpn": "4332894265",
    "agentId": "AGT-C-4265-018",
    "parentAgentNpn": null,
    "levelName": "Agency Principal",
    "levelId": 2,
    "lineOfBusiness": "Dental/Vision",
    "affiliateId": "AFF-008",
    "affiliateName": "Bridgeway Health Partners",
    "carrier": "Cigna",
    "status": "Active",
    "state": "FL",
    "effectiveDate": "2020-10-12",
    "terminationDate": null,
    "productionYtd": 207095,
    "policiesYtd": 218,
    "allAgentIdsForNpn": [
      "AGT-A-4265-195",
      "AGT-C-4265-018"
    ],
    "carriersForNpn": [
      "Ameritas",
      "Cigna"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Bridgeway Health Partners > Jessica Stewart",
    "hierarchyPathCarrierFirst": "AmeriLife > Cigna > Bridgeway Health Partners > Jessica Stewart",
    "lineageHealth": "High Performing"
  },
  {
    "rowId": "HR-0028",
    "rootOrg": "AmeriLife",
    "agentName": "Mia Collins",
    "agentNpn": "8047877267",
    "agentId": "AGT-C-7267-028",
    "parentAgentNpn": null,
    "levelName": "Agency Principal",
    "levelId": 2,
    "lineOfBusiness": "Medicare Supplement",
    "affiliateId": "AFF-008",
    "affiliateName": "Bridgeway Health Partners",
    "carrier": "Cigna",
    "status": "Terminated",
    "state": "NY",
    "effectiveDate": "2024-08-06",
    "terminationDate": "2027-10-23",
    "productionYtd": 19615,
    "policiesYtd": 120,
    "allAgentIdsForNpn": [
      "AGT-C-7267-028"
    ],
    "carriersForNpn": [
      "Cigna"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Bridgeway Health Partners > Mia Collins",
    "hierarchyPathCarrierFirst": "AmeriLife > Cigna > Bridgeway Health Partners > Mia Collins",
    "lineageHealth": "At Risk"
  },
  {
    "rowId": "HR-0180",
    "rootOrg": "AmeriLife",
    "agentName": "Ethan Wilson",
    "agentNpn": "5618742930",
    "agentId": "AGT-A-2930-180",
    "parentAgentNpn": "8047877267",
    "levelName": "Regional Manager",
    "levelId": 3,
    "lineOfBusiness": "Medicare Advantage",
    "affiliateId": "AFF-008",
    "affiliateName": "Bridgeway Health Partners",
    "carrier": "Ameritas",
    "status": "Active",
    "state": "VA",
    "effectiveDate": "2020-05-22",
    "terminationDate": null,
    "productionYtd": 61864,
    "policiesYtd": 199,
    "allAgentIdsForNpn": [
      "AGT-A-2930-180",
      "AGT-W-2930-048"
    ],
    "carriersForNpn": [
      "Ameritas",
      "Wellcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Bridgeway Health Partners > Mia Collins > Ethan Wilson",
    "hierarchyPathCarrierFirst": "AmeriLife > Ameritas > Bridgeway Health Partners > Ethan Wilson",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0048",
    "rootOrg": "AmeriLife",
    "agentName": "Ethan Wilson",
    "agentNpn": "5618742930",
    "agentId": "AGT-W-2930-048",
    "parentAgentNpn": "8047877267",
    "levelName": "Regional Manager",
    "levelId": 3,
    "lineOfBusiness": "ACA",
    "affiliateId": "AFF-008",
    "affiliateName": "Bridgeway Health Partners",
    "carrier": "Wellcare",
    "status": "Terminated",
    "state": "VA",
    "effectiveDate": "2021-07-14",
    "terminationDate": "2022-04-19",
    "productionYtd": 169434,
    "policiesYtd": 10,
    "allAgentIdsForNpn": [
      "AGT-A-2930-180",
      "AGT-W-2930-048"
    ],
    "carriersForNpn": [
      "Ameritas",
      "Wellcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Bridgeway Health Partners > Mia Collins > Ethan Wilson",
    "hierarchyPathCarrierFirst": "AmeriLife > Wellcare > Bridgeway Health Partners > Ethan Wilson",
    "lineageHealth": "At Risk"
  },
  {
    "rowId": "HR-0058",
    "rootOrg": "AmeriLife",
    "agentName": "Liam Turner",
    "agentNpn": "7540301973",
    "agentId": "AGT-U-1973-058",
    "parentAgentNpn": "4332894265",
    "levelName": "Regional Manager",
    "levelId": 3,
    "lineOfBusiness": "Annuity",
    "affiliateId": "AFF-008",
    "affiliateName": "Bridgeway Health Partners",
    "carrier": "UnitedHealthcare",
    "status": "Active",
    "state": "TN",
    "effectiveDate": "2025-04-15",
    "terminationDate": null,
    "productionYtd": 147169,
    "policiesYtd": 83,
    "allAgentIdsForNpn": [
      "AGT-U-1973-058"
    ],
    "carriersForNpn": [
      "UnitedHealthcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Bridgeway Health Partners > Jessica Stewart > Liam Turner",
    "hierarchyPathCarrierFirst": "AmeriLife > UnitedHealthcare > Bridgeway Health Partners > Liam Turner",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0038",
    "rootOrg": "AmeriLife",
    "agentName": "Riley White",
    "agentNpn": "9680276057",
    "agentId": "AGT-A-6057-038",
    "parentAgentNpn": "2445662585",
    "levelName": "Regional Manager",
    "levelId": 3,
    "lineOfBusiness": "Life",
    "affiliateId": "AFF-008",
    "affiliateName": "Bridgeway Health Partners",
    "carrier": "Allstate",
    "status": "Active",
    "state": "NC",
    "effectiveDate": "2021-08-09",
    "terminationDate": null,
    "productionYtd": 167222,
    "policiesYtd": 65,
    "allAgentIdsForNpn": [
      "AGT-A-6057-038",
      "AGT-A-6057-168"
    ],
    "carriersForNpn": [
      "Allstate",
      "Ameritas"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Bridgeway Health Partners > Drew Davis > Riley White",
    "hierarchyPathCarrierFirst": "AmeriLife > Allstate > Bridgeway Health Partners > Riley White",
    "lineageHealth": "High Performing"
  },
  {
    "rowId": "HR-0168",
    "rootOrg": "AmeriLife",
    "agentName": "Riley White",
    "agentNpn": "9680276057",
    "agentId": "AGT-A-6057-168",
    "parentAgentNpn": "2445662585",
    "levelName": "Regional Manager",
    "levelId": 3,
    "lineOfBusiness": "Medicare Advantage",
    "affiliateId": "AFF-008",
    "affiliateName": "Bridgeway Health Partners",
    "carrier": "Ameritas",
    "status": "Active",
    "state": "NC",
    "effectiveDate": "2025-04-23",
    "terminationDate": null,
    "productionYtd": 197470,
    "policiesYtd": 165,
    "allAgentIdsForNpn": [
      "AGT-A-6057-038",
      "AGT-A-6057-168"
    ],
    "carriersForNpn": [
      "Allstate",
      "Ameritas"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Bridgeway Health Partners > Drew Davis > Riley White",
    "hierarchyPathCarrierFirst": "AmeriLife > Ameritas > Bridgeway Health Partners > Riley White",
    "lineageHealth": "High Performing"
  },
  {
    "rowId": "HR-0068",
    "rootOrg": "AmeriLife",
    "agentName": "Logan Patel",
    "agentNpn": "5310195918",
    "agentId": "AGT-DH-5918-068",
    "parentAgentNpn": "8047877267",
    "levelName": "District Manager",
    "levelId": 4,
    "lineOfBusiness": "ACA",
    "affiliateId": "AFF-008",
    "affiliateName": "Bridgeway Health Partners",
    "carrier": "Devoted Health",
    "status": "Terminated",
    "state": "VA",
    "effectiveDate": "2021-01-10",
    "terminationDate": "2022-02-11",
    "productionYtd": 167639,
    "policiesYtd": 152,
    "allAgentIdsForNpn": [
      "AGT-DH-5918-068"
    ],
    "carriersForNpn": [
      "Devoted Health"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Bridgeway Health Partners > Mia Collins > Logan Patel",
    "hierarchyPathCarrierFirst": "AmeriLife > Devoted Health > Bridgeway Health Partners > Logan Patel",
    "lineageHealth": "At Risk"
  },
  {
    "rowId": "HR-0078",
    "rootOrg": "AmeriLife",
    "agentName": "Mark Taylor",
    "agentNpn": "4712367625",
    "agentId": "AGT-DH-7625-078",
    "parentAgentNpn": "9680276057",
    "levelName": "District Manager",
    "levelId": 4,
    "lineOfBusiness": "Annuity",
    "affiliateId": "AFF-008",
    "affiliateName": "Bridgeway Health Partners",
    "carrier": "Devoted Health",
    "status": "Active",
    "state": "VA",
    "effectiveDate": "2025-08-25",
    "terminationDate": null,
    "productionYtd": 11367,
    "policiesYtd": 186,
    "allAgentIdsForNpn": [
      "AGT-DH-7625-078"
    ],
    "carriersForNpn": [
      "Devoted Health"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Bridgeway Health Partners > Drew Davis > Riley White > Mark Taylor",
    "hierarchyPathCarrierFirst": "AmeriLife > Devoted Health > Bridgeway Health Partners > Mark Taylor",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0088",
    "rootOrg": "AmeriLife",
    "agentName": "Reese Lee",
    "agentNpn": "7739255769",
    "agentId": "AGT-W-5769-088",
    "parentAgentNpn": "7540301973",
    "levelName": "District Manager",
    "levelId": 4,
    "lineOfBusiness": "ACA",
    "affiliateId": "AFF-008",
    "affiliateName": "Bridgeway Health Partners",
    "carrier": "Wellcare",
    "status": "Active",
    "state": "OH",
    "effectiveDate": "2024-03-13",
    "terminationDate": null,
    "productionYtd": 124326,
    "policiesYtd": 17,
    "allAgentIdsForNpn": [
      "AGT-W-5769-088"
    ],
    "carriersForNpn": [
      "Wellcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Bridgeway Health Partners > Jessica Stewart > Liam Turner > Reese Lee",
    "hierarchyPathCarrierFirst": "AmeriLife > Wellcare > Bridgeway Health Partners > Reese Lee",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0118",
    "rootOrg": "AmeriLife",
    "agentName": "Cameron Nelson",
    "agentNpn": "9410288290",
    "agentId": "AGT-A-8290-118",
    "parentAgentNpn": "9680276057",
    "levelName": "Agent",
    "levelId": 5,
    "lineOfBusiness": "Annuity",
    "affiliateId": "AFF-008",
    "affiliateName": "Bridgeway Health Partners",
    "carrier": "Anthem",
    "status": "Active",
    "state": "OH",
    "effectiveDate": "2021-11-19",
    "terminationDate": null,
    "productionYtd": 165996,
    "policiesYtd": 29,
    "allAgentIdsForNpn": [
      "AGT-A-8290-118"
    ],
    "carriersForNpn": [
      "Anthem"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Bridgeway Health Partners > Drew Davis > Riley White > Cameron Nelson",
    "hierarchyPathCarrierFirst": "AmeriLife > Anthem > Bridgeway Health Partners > Cameron Nelson",
    "lineageHealth": "High Performing"
  },
  {
    "rowId": "HR-0138",
    "rootOrg": "AmeriLife",
    "agentName": "Charlotte Perez",
    "agentNpn": "3948284698",
    "agentId": "AGT-MOO-4698-138",
    "parentAgentNpn": "4712367625",
    "levelName": "Agent",
    "levelId": 5,
    "lineOfBusiness": "ACA",
    "affiliateId": "AFF-008",
    "affiliateName": "Bridgeway Health Partners",
    "carrier": "Mutual of Omaha",
    "status": "Pending",
    "state": "PA",
    "effectiveDate": "2021-06-12",
    "terminationDate": null,
    "productionYtd": 22208,
    "policiesYtd": 79,
    "allAgentIdsForNpn": [
      "AGT-MOO-4698-138"
    ],
    "carriersForNpn": [
      "Mutual of Omaha"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Bridgeway Health Partners > Drew Davis > Riley White > Mark Taylor > Charlotte Perez",
    "hierarchyPathCarrierFirst": "AmeriLife > Mutual of Omaha > Bridgeway Health Partners > Charlotte Perez",
    "lineageHealth": "Pending"
  },
  {
    "rowId": "HR-0199",
    "rootOrg": "AmeriLife",
    "agentName": "Chloe King",
    "agentNpn": "1074059253",
    "agentId": "AGT-A-9253-199",
    "parentAgentNpn": "8722962486",
    "levelName": "Agent",
    "levelId": 5,
    "lineOfBusiness": "Medicare Supplement",
    "affiliateId": "AFF-008",
    "affiliateName": "Bridgeway Health Partners",
    "carrier": "Aetna",
    "status": "Pending",
    "state": "TX",
    "effectiveDate": "2021-05-23",
    "terminationDate": null,
    "productionYtd": 79724,
    "policiesYtd": 42,
    "allAgentIdsForNpn": [
      "AGT-A-9253-199",
      "AGT-DH-9253-128"
    ],
    "carriersForNpn": [
      "Aetna",
      "Devoted Health"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Bridgeway Health Partners > Mia Collins > Logan Patel > Leo Phillips > Chloe King",
    "hierarchyPathCarrierFirst": "AmeriLife > Aetna > Bridgeway Health Partners > Chloe King",
    "lineageHealth": "Pending"
  },
  {
    "rowId": "HR-0128",
    "rootOrg": "AmeriLife",
    "agentName": "Chloe King",
    "agentNpn": "1074059253",
    "agentId": "AGT-DH-9253-128",
    "parentAgentNpn": "8722962486",
    "levelName": "Agent",
    "levelId": 5,
    "lineOfBusiness": "Medicare Advantage",
    "affiliateId": "AFF-008",
    "affiliateName": "Bridgeway Health Partners",
    "carrier": "Devoted Health",
    "status": "Terminated",
    "state": "TX",
    "effectiveDate": "2026-03-20",
    "terminationDate": "2029-03-21",
    "productionYtd": 117894,
    "policiesYtd": 232,
    "allAgentIdsForNpn": [
      "AGT-A-9253-199",
      "AGT-DH-9253-128"
    ],
    "carriersForNpn": [
      "Aetna",
      "Devoted Health"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Bridgeway Health Partners > Mia Collins > Logan Patel > Leo Phillips > Chloe King",
    "hierarchyPathCarrierFirst": "AmeriLife > Devoted Health > Bridgeway Health Partners > Chloe King",
    "lineageHealth": "At Risk"
  },
  {
    "rowId": "HR-0189",
    "rootOrg": "AmeriLife",
    "agentName": "Leo Phillips",
    "agentNpn": "8722962486",
    "agentId": "AGT-MOO-2486-189",
    "parentAgentNpn": "5310195918",
    "levelName": "Agent",
    "levelId": 5,
    "lineOfBusiness": "Annuity",
    "affiliateId": "AFF-008",
    "affiliateName": "Bridgeway Health Partners",
    "carrier": "Mutual of Omaha",
    "status": "Terminated",
    "state": "IL",
    "effectiveDate": "2023-11-24",
    "terminationDate": "2024-07-27",
    "productionYtd": 142126,
    "policiesYtd": 74,
    "allAgentIdsForNpn": [
      "AGT-MOO-2486-189",
      "AGT-W-2486-108"
    ],
    "carriersForNpn": [
      "Mutual of Omaha",
      "Wellcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Bridgeway Health Partners > Mia Collins > Logan Patel > Leo Phillips",
    "hierarchyPathCarrierFirst": "AmeriLife > Mutual of Omaha > Bridgeway Health Partners > Leo Phillips",
    "lineageHealth": "At Risk"
  },
  {
    "rowId": "HR-0108",
    "rootOrg": "AmeriLife",
    "agentName": "Leo Phillips",
    "agentNpn": "8722962486",
    "agentId": "AGT-W-2486-108",
    "parentAgentNpn": "5310195918",
    "levelName": "Agent",
    "levelId": 5,
    "lineOfBusiness": "Dental/Vision",
    "affiliateId": "AFF-008",
    "affiliateName": "Bridgeway Health Partners",
    "carrier": "Wellcare",
    "status": "Active",
    "state": "IL",
    "effectiveDate": "2022-05-15",
    "terminationDate": null,
    "productionYtd": 66982,
    "policiesYtd": 74,
    "allAgentIdsForNpn": [
      "AGT-MOO-2486-189",
      "AGT-W-2486-108"
    ],
    "carriersForNpn": [
      "Mutual of Omaha",
      "Wellcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Bridgeway Health Partners > Mia Collins > Logan Patel > Leo Phillips",
    "hierarchyPathCarrierFirst": "AmeriLife > Wellcare > Bridgeway Health Partners > Leo Phillips",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0098",
    "rootOrg": "AmeriLife",
    "agentName": "Lucas Baker",
    "agentNpn": "7852415525",
    "agentId": "AGT-W-5525-098",
    "parentAgentNpn": "4712367625",
    "levelName": "Writing Agent",
    "levelId": 6,
    "lineOfBusiness": "Medicare Advantage",
    "affiliateId": "AFF-008",
    "affiliateName": "Bridgeway Health Partners",
    "carrier": "Wellcare",
    "status": "Active",
    "state": "VA",
    "effectiveDate": "2023-10-23",
    "terminationDate": null,
    "productionYtd": 47554,
    "policiesYtd": 222,
    "allAgentIdsForNpn": [
      "AGT-W-5525-098"
    ],
    "carriersForNpn": [
      "Wellcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Bridgeway Health Partners > Drew Davis > Riley White > Mark Taylor > Lucas Baker",
    "hierarchyPathCarrierFirst": "AmeriLife > Wellcare > Bridgeway Health Partners > Lucas Baker",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0148",
    "rootOrg": "AmeriLife",
    "agentName": "Sofia Thomas",
    "agentNpn": "8300300577",
    "agentId": "AGT-DH-0577-148",
    "parentAgentNpn": "9410288290",
    "levelName": "Writing Agent",
    "levelId": 6,
    "lineOfBusiness": "Medicare Supplement",
    "affiliateId": "AFF-008",
    "affiliateName": "Bridgeway Health Partners",
    "carrier": "Devoted Health",
    "status": "Pending",
    "state": "TX",
    "effectiveDate": "2022-08-16",
    "terminationDate": null,
    "productionYtd": 81125,
    "policiesYtd": 207,
    "allAgentIdsForNpn": [
      "AGT-DH-0577-148"
    ],
    "carriersForNpn": [
      "Devoted Health"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Bridgeway Health Partners > Drew Davis > Riley White > Cameron Nelson > Sofia Thomas",
    "hierarchyPathCarrierFirst": "AmeriLife > Devoted Health > Bridgeway Health Partners > Sofia Thomas",
    "lineageHealth": "Pending"
  },
  {
    "rowId": "HR-0006",
    "rootOrg": "AmeriLife",
    "agentName": "Olivia Nelson",
    "agentNpn": "4733616459",
    "agentId": "AGT-A-6459-006",
    "parentAgentNpn": null,
    "levelName": "IMO / Top Agency",
    "levelId": 1,
    "lineOfBusiness": "Medicare Advantage",
    "affiliateId": "AFF-006",
    "affiliateName": "Coastal Coverage Group",
    "carrier": "Ameritas",
    "status": "Active",
    "state": "VA",
    "effectiveDate": "2020-05-30",
    "terminationDate": null,
    "productionYtd": 82448,
    "policiesYtd": 64,
    "allAgentIdsForNpn": [
      "AGT-A-6459-006"
    ],
    "carriersForNpn": [
      "Ameritas"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Coastal Coverage Group > Olivia Nelson",
    "hierarchyPathCarrierFirst": "AmeriLife > Ameritas > Coastal Coverage Group > Olivia Nelson",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0026",
    "rootOrg": "AmeriLife",
    "agentName": "Elijah Allen",
    "agentNpn": "7567496105",
    "agentId": "AGT-DH-6105-026",
    "parentAgentNpn": null,
    "levelName": "Agency Principal",
    "levelId": 2,
    "lineOfBusiness": "Annuity",
    "affiliateId": "AFF-006",
    "affiliateName": "Coastal Coverage Group",
    "carrier": "Devoted Health",
    "status": "Active",
    "state": "NC",
    "effectiveDate": "2020-05-31",
    "terminationDate": null,
    "productionYtd": 154712,
    "policiesYtd": 84,
    "allAgentIdsForNpn": [
      "AGT-DH-6105-026"
    ],
    "carriersForNpn": [
      "Devoted Health"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Coastal Coverage Group > Elijah Allen",
    "hierarchyPathCarrierFirst": "AmeriLife > Devoted Health > Coastal Coverage Group > Elijah Allen",
    "lineageHealth": "High Performing"
  },
  {
    "rowId": "HR-0016",
    "rootOrg": "AmeriLife",
    "agentName": "Nora Johnson",
    "agentNpn": "2051454923",
    "agentId": "AGT-DH-4923-016",
    "parentAgentNpn": null,
    "levelName": "Agency Principal",
    "levelId": 2,
    "lineOfBusiness": "Life",
    "affiliateId": "AFF-006",
    "affiliateName": "Coastal Coverage Group",
    "carrier": "Devoted Health",
    "status": "Active",
    "state": "GA",
    "effectiveDate": "2025-04-18",
    "terminationDate": null,
    "productionYtd": 144510,
    "policiesYtd": 37,
    "allAgentIdsForNpn": [
      "AGT-DH-4923-016"
    ],
    "carriersForNpn": [
      "Devoted Health"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Coastal Coverage Group > Nora Johnson",
    "hierarchyPathCarrierFirst": "AmeriLife > Devoted Health > Coastal Coverage Group > Nora Johnson",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0153",
    "rootOrg": "AmeriLife",
    "agentName": "Benjamin Johnson",
    "agentNpn": "6633778586",
    "agentId": "AGT-A-8586-153",
    "parentAgentNpn": "7567496105",
    "levelName": "Regional Manager",
    "levelId": 3,
    "lineOfBusiness": "Dental/Vision",
    "affiliateId": "AFF-006",
    "affiliateName": "Coastal Coverage Group",
    "carrier": "Allstate",
    "status": "Active",
    "state": "MI",
    "effectiveDate": "2024-09-29",
    "terminationDate": null,
    "productionYtd": 75524,
    "policiesYtd": 60,
    "allAgentIdsForNpn": [
      "AGT-A-8586-153",
      "AGT-MOO-8586-036"
    ],
    "carriersForNpn": [
      "Allstate",
      "Mutual of Omaha"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Coastal Coverage Group > Elijah Allen > Benjamin Johnson",
    "hierarchyPathCarrierFirst": "AmeriLife > Allstate > Coastal Coverage Group > Benjamin Johnson",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0036",
    "rootOrg": "AmeriLife",
    "agentName": "Benjamin Johnson",
    "agentNpn": "6633778586",
    "agentId": "AGT-MOO-8586-036",
    "parentAgentNpn": "7567496105",
    "levelName": "Regional Manager",
    "levelId": 3,
    "lineOfBusiness": "Medicare Supplement",
    "affiliateId": "AFF-006",
    "affiliateName": "Coastal Coverage Group",
    "carrier": "Mutual of Omaha",
    "status": "Terminated",
    "state": "MI",
    "effectiveDate": "2026-05-07",
    "terminationDate": "2029-01-22",
    "productionYtd": 44560,
    "policiesYtd": 44,
    "allAgentIdsForNpn": [
      "AGT-A-8586-153",
      "AGT-MOO-8586-036"
    ],
    "carriersForNpn": [
      "Allstate",
      "Mutual of Omaha"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Coastal Coverage Group > Elijah Allen > Benjamin Johnson",
    "hierarchyPathCarrierFirst": "AmeriLife > Mutual of Omaha > Coastal Coverage Group > Benjamin Johnson",
    "lineageHealth": "At Risk"
  },
  {
    "rowId": "HR-0056",
    "rootOrg": "AmeriLife",
    "agentName": "Mateo Wilson",
    "agentNpn": "2734202799",
    "agentId": "AGT-A-2799-056",
    "parentAgentNpn": "7567496105",
    "levelName": "Regional Manager",
    "levelId": 3,
    "lineOfBusiness": "Medicare Advantage",
    "affiliateId": "AFF-006",
    "affiliateName": "Coastal Coverage Group",
    "carrier": "Aetna",
    "status": "Pending",
    "state": "TN",
    "effectiveDate": "2022-12-19",
    "terminationDate": null,
    "productionYtd": 119219,
    "policiesYtd": 94,
    "allAgentIdsForNpn": [
      "AGT-A-2799-056"
    ],
    "carriersForNpn": [
      "Aetna"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Coastal Coverage Group > Elijah Allen > Mateo Wilson",
    "hierarchyPathCarrierFirst": "AmeriLife > Aetna > Coastal Coverage Group > Mateo Wilson",
    "lineageHealth": "Pending"
  },
  {
    "rowId": "HR-0046",
    "rootOrg": "AmeriLife",
    "agentName": "Zoe White",
    "agentNpn": "1469306919",
    "agentId": "AGT-A-6919-046",
    "parentAgentNpn": "4733616459",
    "levelName": "Regional Manager",
    "levelId": 3,
    "lineOfBusiness": "Dental/Vision",
    "affiliateId": "AFF-006",
    "affiliateName": "Coastal Coverage Group",
    "carrier": "Aetna",
    "status": "Active",
    "state": "FL",
    "effectiveDate": "2025-07-27",
    "terminationDate": null,
    "productionYtd": 209416,
    "policiesYtd": 58,
    "allAgentIdsForNpn": [
      "AGT-A-6919-046"
    ],
    "carriersForNpn": [
      "Aetna"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Coastal Coverage Group > Olivia Nelson > Zoe White",
    "hierarchyPathCarrierFirst": "AmeriLife > Aetna > Coastal Coverage Group > Zoe White",
    "lineageHealth": "High Performing"
  },
  {
    "rowId": "HR-0066",
    "rootOrg": "AmeriLife",
    "agentName": "Drew Taylor",
    "agentNpn": "2472659626",
    "agentId": "AGT-U-9626-066",
    "parentAgentNpn": "6633778586",
    "levelName": "District Manager",
    "levelId": 4,
    "lineOfBusiness": "ACA",
    "affiliateId": "AFF-006",
    "affiliateName": "Coastal Coverage Group",
    "carrier": "UnitedHealthcare",
    "status": "Active",
    "state": "MI",
    "effectiveDate": "2024-01-25",
    "terminationDate": null,
    "productionYtd": 96294,
    "policiesYtd": 139,
    "allAgentIdsForNpn": [
      "AGT-U-9626-066"
    ],
    "carriersForNpn": [
      "UnitedHealthcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Coastal Coverage Group > Elijah Allen > Benjamin Johnson > Drew Taylor",
    "hierarchyPathCarrierFirst": "AmeriLife > UnitedHealthcare > Coastal Coverage Group > Drew Taylor",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0076",
    "rootOrg": "AmeriLife",
    "agentName": "Isabella Miller",
    "agentNpn": "9239688178",
    "agentId": "AGT-C-8178-076",
    "parentAgentNpn": "6633778586",
    "levelName": "District Manager",
    "levelId": 4,
    "lineOfBusiness": "Medicare Advantage",
    "affiliateId": "AFF-006",
    "affiliateName": "Coastal Coverage Group",
    "carrier": "Cigna",
    "status": "Pending",
    "state": "CA",
    "effectiveDate": "2024-09-20",
    "terminationDate": null,
    "productionYtd": 195471,
    "policiesYtd": 16,
    "allAgentIdsForNpn": [
      "AGT-C-8178-076"
    ],
    "carriersForNpn": [
      "Cigna"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Coastal Coverage Group > Elijah Allen > Benjamin Johnson > Isabella Miller",
    "hierarchyPathCarrierFirst": "AmeriLife > Cigna > Coastal Coverage Group > Isabella Miller",
    "lineageHealth": "Pending"
  },
  {
    "rowId": "HR-0086",
    "rootOrg": "AmeriLife",
    "agentName": "Zoe Thomas",
    "agentNpn": "7473041886",
    "agentId": "AGT-U-1886-086",
    "parentAgentNpn": "1469306919",
    "levelName": "District Manager",
    "levelId": 4,
    "lineOfBusiness": "Dental/Vision",
    "affiliateId": "AFF-006",
    "affiliateName": "Coastal Coverage Group",
    "carrier": "UnitedHealthcare",
    "status": "Active",
    "state": "MI",
    "effectiveDate": "2024-08-21",
    "terminationDate": null,
    "productionYtd": 118882,
    "policiesYtd": 102,
    "allAgentIdsForNpn": [
      "AGT-U-1886-086"
    ],
    "carriersForNpn": [
      "UnitedHealthcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Coastal Coverage Group > Olivia Nelson > Zoe White > Zoe Thomas",
    "hierarchyPathCarrierFirst": "AmeriLife > UnitedHealthcare > Coastal Coverage Group > Zoe Thomas",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0200",
    "rootOrg": "AmeriLife",
    "agentName": "Avery Harris",
    "agentNpn": "8884394611",
    "agentId": "AGT-C-4611-200",
    "parentAgentNpn": "2472659626",
    "levelName": "Agent",
    "levelId": 5,
    "lineOfBusiness": "PDP",
    "affiliateId": "AFF-006",
    "affiliateName": "Coastal Coverage Group",
    "carrier": "Cigna",
    "status": "Terminated",
    "state": "NC",
    "effectiveDate": "2023-08-14",
    "terminationDate": "2024-09-27",
    "productionYtd": 136025,
    "policiesYtd": 229,
    "allAgentIdsForNpn": [
      "AGT-C-4611-200",
      "AGT-W-4611-106"
    ],
    "carriersForNpn": [
      "Cigna",
      "Wellcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Coastal Coverage Group > Elijah Allen > Benjamin Johnson > Drew Taylor > Avery Harris",
    "hierarchyPathCarrierFirst": "AmeriLife > Cigna > Coastal Coverage Group > Avery Harris",
    "lineageHealth": "At Risk"
  },
  {
    "rowId": "HR-0106",
    "rootOrg": "AmeriLife",
    "agentName": "Avery Harris",
    "agentNpn": "8884394611",
    "agentId": "AGT-W-4611-106",
    "parentAgentNpn": "2472659626",
    "levelName": "Agent",
    "levelId": 5,
    "lineOfBusiness": "ACA",
    "affiliateId": "AFF-006",
    "affiliateName": "Coastal Coverage Group",
    "carrier": "Wellcare",
    "status": "Pending",
    "state": "NC",
    "effectiveDate": "2025-06-16",
    "terminationDate": null,
    "productionYtd": 80850,
    "policiesYtd": 11,
    "allAgentIdsForNpn": [
      "AGT-C-4611-200",
      "AGT-W-4611-106"
    ],
    "carriersForNpn": [
      "Cigna",
      "Wellcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Coastal Coverage Group > Elijah Allen > Benjamin Johnson > Drew Taylor > Avery Harris",
    "hierarchyPathCarrierFirst": "AmeriLife > Wellcare > Coastal Coverage Group > Avery Harris",
    "lineageHealth": "Pending"
  },
  {
    "rowId": "HR-0136",
    "rootOrg": "AmeriLife",
    "agentName": "Isabella Young",
    "agentNpn": "7186766399",
    "agentId": "AGT-A-6399-136",
    "parentAgentNpn": "9239688178",
    "levelName": "Agent",
    "levelId": 5,
    "lineOfBusiness": "Medicare Advantage",
    "affiliateId": "AFF-006",
    "affiliateName": "Coastal Coverage Group",
    "carrier": "Allstate",
    "status": "Active",
    "state": "PA",
    "effectiveDate": "2021-09-07",
    "terminationDate": null,
    "productionYtd": 152761,
    "policiesYtd": 169,
    "allAgentIdsForNpn": [
      "AGT-A-6399-136"
    ],
    "carriersForNpn": [
      "Allstate"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Coastal Coverage Group > Elijah Allen > Benjamin Johnson > Isabella Miller > Isabella Young",
    "hierarchyPathCarrierFirst": "AmeriLife > Allstate > Coastal Coverage Group > Isabella Young",
    "lineageHealth": "High Performing"
  },
  {
    "rowId": "HR-0126",
    "rootOrg": "AmeriLife",
    "agentName": "Logan Carter",
    "agentNpn": "9633533290",
    "agentId": "AGT-DH-3290-126",
    "parentAgentNpn": "1469306919",
    "levelName": "Agent",
    "levelId": 5,
    "lineOfBusiness": "PDP",
    "affiliateId": "AFF-006",
    "affiliateName": "Coastal Coverage Group",
    "carrier": "Devoted Health",
    "status": "Active",
    "state": "FL",
    "effectiveDate": "2020-06-03",
    "terminationDate": null,
    "productionYtd": 218024,
    "policiesYtd": 73,
    "allAgentIdsForNpn": [
      "AGT-DH-3290-126",
      "AGT-W-3290-186"
    ],
    "carriersForNpn": [
      "Devoted Health",
      "Wellcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Coastal Coverage Group > Olivia Nelson > Zoe White > Logan Carter",
    "hierarchyPathCarrierFirst": "AmeriLife > Devoted Health > Coastal Coverage Group > Logan Carter",
    "lineageHealth": "High Performing"
  },
  {
    "rowId": "HR-0186",
    "rootOrg": "AmeriLife",
    "agentName": "Logan Carter",
    "agentNpn": "9633533290",
    "agentId": "AGT-W-3290-186",
    "parentAgentNpn": "1469306919",
    "levelName": "Agent",
    "levelId": 5,
    "lineOfBusiness": "Annuity",
    "affiliateId": "AFF-006",
    "affiliateName": "Coastal Coverage Group",
    "carrier": "Wellcare",
    "status": "Active",
    "state": "FL",
    "effectiveDate": "2025-01-01",
    "terminationDate": null,
    "productionYtd": 74862,
    "policiesYtd": 177,
    "allAgentIdsForNpn": [
      "AGT-DH-3290-126",
      "AGT-W-3290-186"
    ],
    "carriersForNpn": [
      "Devoted Health",
      "Wellcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Coastal Coverage Group > Olivia Nelson > Zoe White > Logan Carter",
    "hierarchyPathCarrierFirst": "AmeriLife > Wellcare > Coastal Coverage Group > Logan Carter",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0146",
    "rootOrg": "AmeriLife",
    "agentName": "Rowan Roberts",
    "agentNpn": "1610900200",
    "agentId": "AGT-A-0200-146",
    "parentAgentNpn": "9239688178",
    "levelName": "Agent",
    "levelId": 5,
    "lineOfBusiness": "Medicare Advantage",
    "affiliateId": "AFF-006",
    "affiliateName": "Coastal Coverage Group",
    "carrier": "Allstate",
    "status": "Terminated",
    "state": "NJ",
    "effectiveDate": "2021-11-09",
    "terminationDate": "2023-07-30",
    "productionYtd": 107704,
    "policiesYtd": 93,
    "allAgentIdsForNpn": [
      "AGT-A-0200-146"
    ],
    "carriersForNpn": [
      "Allstate"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Coastal Coverage Group > Elijah Allen > Benjamin Johnson > Isabella Miller > Rowan Roberts",
    "hierarchyPathCarrierFirst": "AmeriLife > Allstate > Coastal Coverage Group > Rowan Roberts",
    "lineageHealth": "At Risk"
  },
  {
    "rowId": "HR-0096",
    "rootOrg": "AmeriLife",
    "agentName": "Aria Campbell",
    "agentNpn": "2825989011",
    "agentId": "AGT-A-9011-096",
    "parentAgentNpn": "6633778586",
    "levelName": "Writing Agent",
    "levelId": 6,
    "lineOfBusiness": "Annuity",
    "affiliateId": "AFF-006",
    "affiliateName": "Coastal Coverage Group",
    "carrier": "Ameritas",
    "status": "Active",
    "state": "PA",
    "effectiveDate": "2026-03-30",
    "terminationDate": null,
    "productionYtd": 172446,
    "policiesYtd": 212,
    "allAgentIdsForNpn": [
      "AGT-A-9011-096",
      "AGT-C-9011-157"
    ],
    "carriersForNpn": [
      "Ameritas",
      "Cigna"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Coastal Coverage Group > Elijah Allen > Benjamin Johnson > Aria Campbell",
    "hierarchyPathCarrierFirst": "AmeriLife > Ameritas > Coastal Coverage Group > Aria Campbell",
    "lineageHealth": "High Performing"
  },
  {
    "rowId": "HR-0157",
    "rootOrg": "AmeriLife",
    "agentName": "Aria Campbell",
    "agentNpn": "2825989011",
    "agentId": "AGT-C-9011-157",
    "parentAgentNpn": "6633778586",
    "levelName": "Writing Agent",
    "levelId": 6,
    "lineOfBusiness": "Medicare Advantage",
    "affiliateId": "AFF-006",
    "affiliateName": "Coastal Coverage Group",
    "carrier": "Cigna",
    "status": "Active",
    "state": "PA",
    "effectiveDate": "2023-04-08",
    "terminationDate": null,
    "productionYtd": 161168,
    "policiesYtd": 90,
    "allAgentIdsForNpn": [
      "AGT-A-9011-096",
      "AGT-C-9011-157"
    ],
    "carriersForNpn": [
      "Ameritas",
      "Cigna"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Coastal Coverage Group > Elijah Allen > Benjamin Johnson > Aria Campbell",
    "hierarchyPathCarrierFirst": "AmeriLife > Cigna > Coastal Coverage Group > Aria Campbell",
    "lineageHealth": "High Performing"
  },
  {
    "rowId": "HR-0166",
    "rootOrg": "AmeriLife",
    "agentName": "Skyler Allen",
    "agentNpn": "8299146480",
    "agentId": "AGT-A-6480-166",
    "parentAgentNpn": "1469306919",
    "levelName": "Writing Agent",
    "levelId": 6,
    "lineOfBusiness": "Medicare Advantage",
    "affiliateId": "AFF-006",
    "affiliateName": "Coastal Coverage Group",
    "carrier": "Aetna",
    "status": "Active",
    "state": "VA",
    "effectiveDate": "2023-04-16",
    "terminationDate": null,
    "productionYtd": 207384,
    "policiesYtd": 51,
    "allAgentIdsForNpn": [
      "AGT-A-6480-166",
      "AGT-H-6480-116"
    ],
    "carriersForNpn": [
      "Aetna",
      "Humana"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Coastal Coverage Group > Olivia Nelson > Zoe White > Skyler Allen",
    "hierarchyPathCarrierFirst": "AmeriLife > Aetna > Coastal Coverage Group > Skyler Allen",
    "lineageHealth": "High Performing"
  },
  {
    "rowId": "HR-0116",
    "rootOrg": "AmeriLife",
    "agentName": "Skyler Allen",
    "agentNpn": "8299146480",
    "agentId": "AGT-H-6480-116",
    "parentAgentNpn": "1469306919",
    "levelName": "Writing Agent",
    "levelId": 6,
    "lineOfBusiness": "Annuity",
    "affiliateId": "AFF-006",
    "affiliateName": "Coastal Coverage Group",
    "carrier": "Humana",
    "status": "Active",
    "state": "VA",
    "effectiveDate": "2022-09-23",
    "terminationDate": null,
    "productionYtd": 104975,
    "policiesYtd": 134,
    "allAgentIdsForNpn": [
      "AGT-A-6480-166",
      "AGT-H-6480-116"
    ],
    "carriersForNpn": [
      "Aetna",
      "Humana"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Coastal Coverage Group > Olivia Nelson > Zoe White > Skyler Allen",
    "hierarchyPathCarrierFirst": "AmeriLife > Humana > Coastal Coverage Group > Skyler Allen",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0009",
    "rootOrg": "AmeriLife",
    "agentName": "Sophia Nguyen",
    "agentNpn": "9776552803",
    "agentId": "AGT-A-2803-009",
    "parentAgentNpn": null,
    "levelName": "IMO / Top Agency",
    "levelId": 1,
    "lineOfBusiness": "Dental/Vision",
    "affiliateId": "AFF-009",
    "affiliateName": "Evergreen Retirement Advisors",
    "carrier": "Ameritas",
    "status": "Pending",
    "state": "GA",
    "effectiveDate": "2024-01-21",
    "terminationDate": null,
    "productionYtd": 130676,
    "policiesYtd": 160,
    "allAgentIdsForNpn": [
      "AGT-A-2803-009"
    ],
    "carriersForNpn": [
      "Ameritas"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Evergreen Retirement Advisors > Sophia Nguyen",
    "hierarchyPathCarrierFirst": "AmeriLife > Ameritas > Evergreen Retirement Advisors > Sophia Nguyen",
    "lineageHealth": "Pending"
  },
  {
    "rowId": "HR-0185",
    "rootOrg": "AmeriLife",
    "agentName": "Emerson Walker",
    "agentNpn": "5974249674",
    "agentId": "AGT-A-9674-185",
    "parentAgentNpn": null,
    "levelName": "Agency Principal",
    "levelId": 2,
    "lineOfBusiness": "Annuity",
    "affiliateId": "AFF-009",
    "affiliateName": "Evergreen Retirement Advisors",
    "carrier": "Ameritas",
    "status": "Active",
    "state": "NJ",
    "effectiveDate": "2025-10-21",
    "terminationDate": null,
    "productionYtd": 30870,
    "policiesYtd": 67,
    "allAgentIdsForNpn": [
      "AGT-A-9674-185",
      "AGT-W-9674-029"
    ],
    "carriersForNpn": [
      "Ameritas",
      "Wellcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Evergreen Retirement Advisors > Emerson Walker",
    "hierarchyPathCarrierFirst": "AmeriLife > Ameritas > Evergreen Retirement Advisors > Emerson Walker",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0029",
    "rootOrg": "AmeriLife",
    "agentName": "Emerson Walker",
    "agentNpn": "5974249674",
    "agentId": "AGT-W-9674-029",
    "parentAgentNpn": null,
    "levelName": "Agency Principal",
    "levelId": 2,
    "lineOfBusiness": "ACA",
    "affiliateId": "AFF-009",
    "affiliateName": "Evergreen Retirement Advisors",
    "carrier": "Wellcare",
    "status": "Pending",
    "state": "NJ",
    "effectiveDate": "2023-10-18",
    "terminationDate": null,
    "productionYtd": 104197,
    "policiesYtd": 166,
    "allAgentIdsForNpn": [
      "AGT-A-9674-185",
      "AGT-W-9674-029"
    ],
    "carriersForNpn": [
      "Ameritas",
      "Wellcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Evergreen Retirement Advisors > Emerson Walker",
    "hierarchyPathCarrierFirst": "AmeriLife > Wellcare > Evergreen Retirement Advisors > Emerson Walker",
    "lineageHealth": "Pending"
  },
  {
    "rowId": "HR-0194",
    "rootOrg": "AmeriLife",
    "agentName": "Taylor Jackson",
    "agentNpn": "7017956955",
    "agentId": "AGT-H-6955-194",
    "parentAgentNpn": null,
    "levelName": "Agency Principal",
    "levelId": 2,
    "lineOfBusiness": "Life",
    "affiliateId": "AFF-009",
    "affiliateName": "Evergreen Retirement Advisors",
    "carrier": "Humana",
    "status": "Active",
    "state": "NY",
    "effectiveDate": "2020-09-26",
    "terminationDate": null,
    "productionYtd": 187939,
    "policiesYtd": 184,
    "allAgentIdsForNpn": [
      "AGT-H-6955-194",
      "AGT-MOO-6955-019"
    ],
    "carriersForNpn": [
      "Humana",
      "Mutual of Omaha"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Evergreen Retirement Advisors > Taylor Jackson",
    "hierarchyPathCarrierFirst": "AmeriLife > Humana > Evergreen Retirement Advisors > Taylor Jackson",
    "lineageHealth": "High Performing"
  },
  {
    "rowId": "HR-0019",
    "rootOrg": "AmeriLife",
    "agentName": "Taylor Jackson",
    "agentNpn": "7017956955",
    "agentId": "AGT-MOO-6955-019",
    "parentAgentNpn": null,
    "levelName": "Agency Principal",
    "levelId": 2,
    "lineOfBusiness": "PDP",
    "affiliateId": "AFF-009",
    "affiliateName": "Evergreen Retirement Advisors",
    "carrier": "Mutual of Omaha",
    "status": "Pending",
    "state": "NY",
    "effectiveDate": "2023-10-24",
    "terminationDate": null,
    "productionYtd": 215102,
    "policiesYtd": 0,
    "allAgentIdsForNpn": [
      "AGT-H-6955-194",
      "AGT-MOO-6955-019"
    ],
    "carriersForNpn": [
      "Humana",
      "Mutual of Omaha"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Evergreen Retirement Advisors > Taylor Jackson",
    "hierarchyPathCarrierFirst": "AmeriLife > Mutual of Omaha > Evergreen Retirement Advisors > Taylor Jackson",
    "lineageHealth": "Pending"
  },
  {
    "rowId": "HR-0039",
    "rootOrg": "AmeriLife",
    "agentName": "Amelia Miller",
    "agentNpn": "1030884438",
    "agentId": "AGT-DH-4438-039",
    "parentAgentNpn": "5974249674",
    "levelName": "Regional Manager",
    "levelId": 3,
    "lineOfBusiness": "Dental/Vision",
    "affiliateId": "AFF-009",
    "affiliateName": "Evergreen Retirement Advisors",
    "carrier": "Devoted Health",
    "status": "Terminated",
    "state": "IL",
    "effectiveDate": "2022-11-11",
    "terminationDate": "2023-05-19",
    "productionYtd": 121963,
    "policiesYtd": 230,
    "allAgentIdsForNpn": [
      "AGT-DH-4438-039"
    ],
    "carriersForNpn": [
      "Devoted Health"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Evergreen Retirement Advisors > Emerson Walker > Amelia Miller",
    "hierarchyPathCarrierFirst": "AmeriLife > Devoted Health > Evergreen Retirement Advisors > Amelia Miller",
    "lineageHealth": "At Risk"
  },
  {
    "rowId": "HR-0049",
    "rootOrg": "AmeriLife",
    "agentName": "Cameron Thompson",
    "agentNpn": "2015242176",
    "agentId": "AGT-W-2176-049",
    "parentAgentNpn": "7017956955",
    "levelName": "Regional Manager",
    "levelId": 3,
    "lineOfBusiness": "Annuity",
    "affiliateId": "AFF-009",
    "affiliateName": "Evergreen Retirement Advisors",
    "carrier": "Wellcare",
    "status": "Active",
    "state": "OH",
    "effectiveDate": "2024-12-10",
    "terminationDate": null,
    "productionYtd": 95646,
    "policiesYtd": 187,
    "allAgentIdsForNpn": [
      "AGT-W-2176-049"
    ],
    "carriersForNpn": [
      "Wellcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Evergreen Retirement Advisors > Taylor Jackson > Cameron Thompson",
    "hierarchyPathCarrierFirst": "AmeriLife > Wellcare > Evergreen Retirement Advisors > Cameron Thompson",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0059",
    "rootOrg": "AmeriLife",
    "agentName": "Skyler Turner",
    "agentNpn": "8370987661",
    "agentId": "AGT-A-7661-059",
    "parentAgentNpn": "7017956955",
    "levelName": "Regional Manager",
    "levelId": 3,
    "lineOfBusiness": "ACA",
    "affiliateId": "AFF-009",
    "affiliateName": "Evergreen Retirement Advisors",
    "carrier": "Allstate",
    "status": "Terminated",
    "state": "FL",
    "effectiveDate": "2022-06-25",
    "terminationDate": "2023-02-24",
    "productionYtd": 215968,
    "policiesYtd": 118,
    "allAgentIdsForNpn": [
      "AGT-A-7661-059"
    ],
    "carriersForNpn": [
      "Allstate"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Evergreen Retirement Advisors > Taylor Jackson > Skyler Turner",
    "hierarchyPathCarrierFirst": "AmeriLife > Allstate > Evergreen Retirement Advisors > Skyler Turner",
    "lineageHealth": "At Risk"
  },
  {
    "rowId": "HR-0089",
    "rootOrg": "AmeriLife",
    "agentName": "Avery Thomas",
    "agentNpn": "2232285036",
    "agentId": "AGT-H-5036-089",
    "parentAgentNpn": "8370987661",
    "levelName": "District Manager",
    "levelId": 4,
    "lineOfBusiness": "Life",
    "affiliateId": "AFF-009",
    "affiliateName": "Evergreen Retirement Advisors",
    "carrier": "Humana",
    "status": "Active",
    "state": "OH",
    "effectiveDate": "2020-12-15",
    "terminationDate": null,
    "productionYtd": 25313,
    "policiesYtd": 190,
    "allAgentIdsForNpn": [
      "AGT-H-5036-089"
    ],
    "carriersForNpn": [
      "Humana"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Evergreen Retirement Advisors > Taylor Jackson > Skyler Turner > Avery Thomas",
    "hierarchyPathCarrierFirst": "AmeriLife > Humana > Evergreen Retirement Advisors > Avery Thomas",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0069",
    "rootOrg": "AmeriLife",
    "agentName": "Nora Moore",
    "agentNpn": "8325785916",
    "agentId": "AGT-A-5916-069",
    "parentAgentNpn": "7017956955",
    "levelName": "District Manager",
    "levelId": 4,
    "lineOfBusiness": "Medicare Supplement",
    "affiliateId": "AFF-009",
    "affiliateName": "Evergreen Retirement Advisors",
    "carrier": "Aetna",
    "status": "Active",
    "state": "NC",
    "effectiveDate": "2020-07-26",
    "terminationDate": null,
    "productionYtd": 33010,
    "policiesYtd": 201,
    "allAgentIdsForNpn": [
      "AGT-A-5916-069"
    ],
    "carriersForNpn": [
      "Aetna"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Evergreen Retirement Advisors > Taylor Jackson > Nora Moore",
    "hierarchyPathCarrierFirst": "AmeriLife > Aetna > Evergreen Retirement Advisors > Nora Moore",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0079",
    "rootOrg": "AmeriLife",
    "agentName": "Priya Roberts",
    "agentNpn": "7482848011",
    "agentId": "AGT-A-8011-079",
    "parentAgentNpn": "8370987661",
    "levelName": "District Manager",
    "levelId": 4,
    "lineOfBusiness": "ACA",
    "affiliateId": "AFF-009",
    "affiliateName": "Evergreen Retirement Advisors",
    "carrier": "Ameritas",
    "status": "Active",
    "state": "MI",
    "effectiveDate": "2023-05-20",
    "terminationDate": null,
    "productionYtd": 8165,
    "policiesYtd": 15,
    "allAgentIdsForNpn": [
      "AGT-A-8011-079"
    ],
    "carriersForNpn": [
      "Ameritas"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Evergreen Retirement Advisors > Taylor Jackson > Skyler Turner > Priya Roberts",
    "hierarchyPathCarrierFirst": "AmeriLife > Ameritas > Evergreen Retirement Advisors > Priya Roberts",
    "lineageHealth": "At Risk"
  },
  {
    "rowId": "HR-0149",
    "rootOrg": "AmeriLife",
    "agentName": "Casey Carter",
    "agentNpn": "2075321966",
    "agentId": "AGT-DH-1966-149",
    "parentAgentNpn": "2232285036",
    "levelName": "Agent",
    "levelId": 5,
    "lineOfBusiness": "ACA",
    "affiliateId": "AFF-009",
    "affiliateName": "Evergreen Retirement Advisors",
    "carrier": "Devoted Health",
    "status": "Active",
    "state": "NY",
    "effectiveDate": "2022-03-05",
    "terminationDate": null,
    "productionYtd": 149532,
    "policiesYtd": 112,
    "allAgentIdsForNpn": [
      "AGT-DH-1966-149"
    ],
    "carriersForNpn": [
      "Devoted Health"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Evergreen Retirement Advisors > Taylor Jackson > Skyler Turner > Avery Thomas > Casey Carter",
    "hierarchyPathCarrierFirst": "AmeriLife > Devoted Health > Evergreen Retirement Advisors > Casey Carter",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0139",
    "rootOrg": "AmeriLife",
    "agentName": "Casey Wilson",
    "agentNpn": "8578226896",
    "agentId": "AGT-A-6896-139",
    "parentAgentNpn": "7482848011",
    "levelName": "Agent",
    "levelId": 5,
    "lineOfBusiness": "PDP",
    "affiliateId": "AFF-009",
    "affiliateName": "Evergreen Retirement Advisors",
    "carrier": "Ameritas",
    "status": "Terminated",
    "state": "AZ",
    "effectiveDate": "2024-03-22",
    "terminationDate": "2026-12-07",
    "productionYtd": 213171,
    "policiesYtd": 32,
    "allAgentIdsForNpn": [
      "AGT-A-6896-139"
    ],
    "carriersForNpn": [
      "Ameritas"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Evergreen Retirement Advisors > Taylor Jackson > Skyler Turner > Priya Roberts > Casey Wilson",
    "hierarchyPathCarrierFirst": "AmeriLife > Ameritas > Evergreen Retirement Advisors > Casey Wilson",
    "lineageHealth": "At Risk"
  },
  {
    "rowId": "HR-0119",
    "rootOrg": "AmeriLife",
    "agentName": "Amelia Campbell",
    "agentNpn": "2043030161",
    "agentId": "AGT-A-0161-119",
    "parentAgentNpn": "2232285036",
    "levelName": "Writing Agent",
    "levelId": 6,
    "lineOfBusiness": "Dental/Vision",
    "affiliateId": "AFF-009",
    "affiliateName": "Evergreen Retirement Advisors",
    "carrier": "Ameritas",
    "status": "Active",
    "state": "IL",
    "effectiveDate": "2025-09-19",
    "terminationDate": null,
    "productionYtd": 91586,
    "policiesYtd": 89,
    "allAgentIdsForNpn": [
      "AGT-A-0161-119"
    ],
    "carriersForNpn": [
      "Ameritas"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Evergreen Retirement Advisors > Taylor Jackson > Skyler Turner > Avery Thomas > Amelia Campbell",
    "hierarchyPathCarrierFirst": "AmeriLife > Ameritas > Evergreen Retirement Advisors > Amelia Campbell",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0109",
    "rootOrg": "AmeriLife",
    "agentName": "Parker Mitchell",
    "agentNpn": "3294043548",
    "agentId": "AGT-A-3548-109",
    "parentAgentNpn": "7482848011",
    "levelName": "Writing Agent",
    "levelId": 6,
    "lineOfBusiness": "Life",
    "affiliateId": "AFF-009",
    "affiliateName": "Evergreen Retirement Advisors",
    "carrier": "Anthem",
    "status": "Active",
    "state": "TN",
    "effectiveDate": "2021-05-06",
    "terminationDate": null,
    "productionYtd": 195825,
    "policiesYtd": 110,
    "allAgentIdsForNpn": [
      "AGT-A-3548-109"
    ],
    "carriersForNpn": [
      "Anthem"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Evergreen Retirement Advisors > Taylor Jackson > Skyler Turner > Priya Roberts > Parker Mitchell",
    "hierarchyPathCarrierFirst": "AmeriLife > Anthem > Evergreen Retirement Advisors > Parker Mitchell",
    "lineageHealth": "High Performing"
  },
  {
    "rowId": "HR-0129",
    "rootOrg": "AmeriLife",
    "agentName": "Sofia Wilson",
    "agentNpn": "7792729530",
    "agentId": "AGT-A-9530-129",
    "parentAgentNpn": "8325785916",
    "levelName": "Writing Agent",
    "levelId": 6,
    "lineOfBusiness": "Annuity",
    "affiliateId": "AFF-009",
    "affiliateName": "Evergreen Retirement Advisors",
    "carrier": "Allstate",
    "status": "Active",
    "state": "GA",
    "effectiveDate": "2022-02-10",
    "terminationDate": null,
    "productionYtd": 124683,
    "policiesYtd": 128,
    "allAgentIdsForNpn": [
      "AGT-A-9530-129"
    ],
    "carriersForNpn": [
      "Allstate"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Evergreen Retirement Advisors > Taylor Jackson > Nora Moore > Sofia Wilson",
    "hierarchyPathCarrierFirst": "AmeriLife > Allstate > Evergreen Retirement Advisors > Sofia Wilson",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0099",
    "rootOrg": "AmeriLife",
    "agentName": "Zoe Wright",
    "agentNpn": "8995059760",
    "agentId": "AGT-C-9760-099",
    "parentAgentNpn": "2015242176",
    "levelName": "Writing Agent",
    "levelId": 6,
    "lineOfBusiness": "Medicare Advantage",
    "affiliateId": "AFF-009",
    "affiliateName": "Evergreen Retirement Advisors",
    "carrier": "Cigna",
    "status": "Terminated",
    "state": "GA",
    "effectiveDate": "2026-05-08",
    "terminationDate": "2027-12-19",
    "productionYtd": 37191,
    "policiesYtd": 189,
    "allAgentIdsForNpn": [
      "AGT-C-9760-099"
    ],
    "carriersForNpn": [
      "Cigna"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Evergreen Retirement Advisors > Taylor Jackson > Cameron Thompson > Zoe Wright",
    "hierarchyPathCarrierFirst": "AmeriLife > Cigna > Evergreen Retirement Advisors > Zoe Wright",
    "lineageHealth": "At Risk"
  },
  {
    "rowId": "HR-0003",
    "rootOrg": "AmeriLife",
    "agentName": "Noah Patel",
    "agentNpn": "1127978094",
    "agentId": "AGT-DH-8094-003",
    "parentAgentNpn": null,
    "levelName": "IMO / Top Agency",
    "levelId": 1,
    "lineOfBusiness": "PDP",
    "affiliateId": "AFF-003",
    "affiliateName": "Horizon Life Group",
    "carrier": "Devoted Health",
    "status": "Active",
    "state": "FL",
    "effectiveDate": "2021-01-08",
    "terminationDate": null,
    "productionYtd": 107046,
    "policiesYtd": 85,
    "allAgentIdsForNpn": [
      "AGT-DH-8094-003"
    ],
    "carriersForNpn": [
      "Devoted Health"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Horizon Life Group > Noah Patel",
    "hierarchyPathCarrierFirst": "AmeriLife > Devoted Health > Horizon Life Group > Noah Patel",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0023",
    "rootOrg": "AmeriLife",
    "agentName": "Amelia Lewis",
    "agentNpn": "2554762903",
    "agentId": "AGT-U-2903-023",
    "parentAgentNpn": null,
    "levelName": "Agency Principal",
    "levelId": 2,
    "lineOfBusiness": "Life",
    "affiliateId": "AFF-003",
    "affiliateName": "Horizon Life Group",
    "carrier": "UnitedHealthcare",
    "status": "Pending",
    "state": "PA",
    "effectiveDate": "2022-09-05",
    "terminationDate": null,
    "productionYtd": 61226,
    "policiesYtd": 219,
    "allAgentIdsForNpn": [
      "AGT-U-2903-023"
    ],
    "carriersForNpn": [
      "UnitedHealthcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Horizon Life Group > Amelia Lewis",
    "hierarchyPathCarrierFirst": "AmeriLife > UnitedHealthcare > Horizon Life Group > Amelia Lewis",
    "lineageHealth": "Pending"
  },
  {
    "rowId": "HR-0013",
    "rootOrg": "AmeriLife",
    "agentName": "Rowan Stewart",
    "agentNpn": "5728765136",
    "agentId": "AGT-A-5136-013",
    "parentAgentNpn": null,
    "levelName": "Agency Principal",
    "levelId": 2,
    "lineOfBusiness": "Medicare Supplement",
    "affiliateId": "AFF-003",
    "affiliateName": "Horizon Life Group",
    "carrier": "Ameritas",
    "status": "Active",
    "state": "TX",
    "effectiveDate": "2024-07-29",
    "terminationDate": null,
    "productionYtd": 220569,
    "policiesYtd": 233,
    "allAgentIdsForNpn": [
      "AGT-A-5136-013",
      "AGT-DH-5136-188"
    ],
    "carriersForNpn": [
      "Ameritas",
      "Devoted Health"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Horizon Life Group > Rowan Stewart",
    "hierarchyPathCarrierFirst": "AmeriLife > Ameritas > Horizon Life Group > Rowan Stewart",
    "lineageHealth": "High Performing"
  },
  {
    "rowId": "HR-0188",
    "rootOrg": "AmeriLife",
    "agentName": "Rowan Stewart",
    "agentNpn": "5728765136",
    "agentId": "AGT-DH-5136-188",
    "parentAgentNpn": null,
    "levelName": "Agency Principal",
    "levelId": 2,
    "lineOfBusiness": "Medicare Advantage",
    "affiliateId": "AFF-003",
    "affiliateName": "Horizon Life Group",
    "carrier": "Devoted Health",
    "status": "Terminated",
    "state": "TX",
    "effectiveDate": "2021-12-08",
    "terminationDate": "2023-09-04",
    "productionYtd": 212471,
    "policiesYtd": 174,
    "allAgentIdsForNpn": [
      "AGT-A-5136-013",
      "AGT-DH-5136-188"
    ],
    "carriersForNpn": [
      "Ameritas",
      "Devoted Health"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Horizon Life Group > Rowan Stewart",
    "hierarchyPathCarrierFirst": "AmeriLife > Devoted Health > Horizon Life Group > Rowan Stewart",
    "lineageHealth": "At Risk"
  },
  {
    "rowId": "HR-0043",
    "rootOrg": "AmeriLife",
    "agentName": "Liam Brown",
    "agentNpn": "1405126228",
    "agentId": "AGT-H-6228-043",
    "parentAgentNpn": "5728765136",
    "levelName": "Regional Manager",
    "levelId": 3,
    "lineOfBusiness": "Annuity",
    "affiliateId": "AFF-003",
    "affiliateName": "Horizon Life Group",
    "carrier": "Humana",
    "status": "Active",
    "state": "MI",
    "effectiveDate": "2022-08-29",
    "terminationDate": null,
    "productionYtd": 94098,
    "policiesYtd": 147,
    "allAgentIdsForNpn": [
      "AGT-H-6228-043",
      "AGT-U-6228-192"
    ],
    "carriersForNpn": [
      "Humana",
      "UnitedHealthcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Horizon Life Group > Rowan Stewart > Liam Brown",
    "hierarchyPathCarrierFirst": "AmeriLife > Humana > Horizon Life Group > Liam Brown",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0192",
    "rootOrg": "AmeriLife",
    "agentName": "Liam Brown",
    "agentNpn": "1405126228",
    "agentId": "AGT-U-6228-192",
    "parentAgentNpn": "5728765136",
    "levelName": "Regional Manager",
    "levelId": 3,
    "lineOfBusiness": "Medicare Advantage",
    "affiliateId": "AFF-003",
    "affiliateName": "Horizon Life Group",
    "carrier": "UnitedHealthcare",
    "status": "Active",
    "state": "MI",
    "effectiveDate": "2022-08-27",
    "terminationDate": null,
    "productionYtd": 94606,
    "policiesYtd": 141,
    "allAgentIdsForNpn": [
      "AGT-H-6228-043",
      "AGT-U-6228-192"
    ],
    "carriersForNpn": [
      "Humana",
      "UnitedHealthcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Horizon Life Group > Rowan Stewart > Liam Brown",
    "hierarchyPathCarrierFirst": "AmeriLife > UnitedHealthcare > Horizon Life Group > Liam Brown",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0033",
    "rootOrg": "AmeriLife",
    "agentName": "Mason Rivera",
    "agentNpn": "8760038701",
    "agentId": "AGT-H-8701-033",
    "parentAgentNpn": "1127978094",
    "levelName": "Regional Manager",
    "levelId": 3,
    "lineOfBusiness": "ACA",
    "affiliateId": "AFF-003",
    "affiliateName": "Horizon Life Group",
    "carrier": "Humana",
    "status": "Active",
    "state": "FL",
    "effectiveDate": "2024-12-22",
    "terminationDate": null,
    "productionYtd": 78503,
    "policiesYtd": 231,
    "allAgentIdsForNpn": [
      "AGT-H-8701-033"
    ],
    "carriersForNpn": [
      "Humana"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Horizon Life Group > Noah Patel > Mason Rivera",
    "hierarchyPathCarrierFirst": "AmeriLife > Humana > Horizon Life Group > Mason Rivera",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0053",
    "rootOrg": "AmeriLife",
    "agentName": "Skyler Thompson",
    "agentNpn": "3328710672",
    "agentId": "AGT-W-0672-053",
    "parentAgentNpn": "5728765136",
    "levelName": "Regional Manager",
    "levelId": 3,
    "lineOfBusiness": "ACA",
    "affiliateId": "AFF-003",
    "affiliateName": "Horizon Life Group",
    "carrier": "Wellcare",
    "status": "Active",
    "state": "IL",
    "effectiveDate": "2025-05-27",
    "terminationDate": null,
    "productionYtd": 88792,
    "policiesYtd": 205,
    "allAgentIdsForNpn": [
      "AGT-W-0672-053"
    ],
    "carriersForNpn": [
      "Wellcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Horizon Life Group > Rowan Stewart > Skyler Thompson",
    "hierarchyPathCarrierFirst": "AmeriLife > Wellcare > Horizon Life Group > Skyler Thompson",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0162",
    "rootOrg": "AmeriLife",
    "agentName": "Harper Johnson",
    "agentNpn": "4482238042",
    "agentId": "AGT-A-8042-162",
    "parentAgentNpn": "1405126228",
    "levelName": "District Manager",
    "levelId": 4,
    "lineOfBusiness": "PDP",
    "affiliateId": "AFF-003",
    "affiliateName": "Horizon Life Group",
    "carrier": "Aetna",
    "status": "Active",
    "state": "TN",
    "effectiveDate": "2024-01-02",
    "terminationDate": null,
    "productionYtd": 63209,
    "policiesYtd": 187,
    "allAgentIdsForNpn": [
      "AGT-A-8042-073",
      "AGT-A-8042-162"
    ],
    "carriersForNpn": [
      "Aetna",
      "Ameritas"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Horizon Life Group > Rowan Stewart > Liam Brown > Harper Johnson",
    "hierarchyPathCarrierFirst": "AmeriLife > Aetna > Horizon Life Group > Harper Johnson",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0073",
    "rootOrg": "AmeriLife",
    "agentName": "Harper Johnson",
    "agentNpn": "4482238042",
    "agentId": "AGT-A-8042-073",
    "parentAgentNpn": "1405126228",
    "levelName": "District Manager",
    "levelId": 4,
    "lineOfBusiness": "Medicare Advantage",
    "affiliateId": "AFF-003",
    "affiliateName": "Horizon Life Group",
    "carrier": "Ameritas",
    "status": "Active",
    "state": "TN",
    "effectiveDate": "2022-10-23",
    "terminationDate": null,
    "productionYtd": 173292,
    "policiesYtd": 221,
    "allAgentIdsForNpn": [
      "AGT-A-8042-073",
      "AGT-A-8042-162"
    ],
    "carriersForNpn": [
      "Aetna",
      "Ameritas"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Horizon Life Group > Rowan Stewart > Liam Brown > Harper Johnson",
    "hierarchyPathCarrierFirst": "AmeriLife > Ameritas > Horizon Life Group > Harper Johnson",
    "lineageHealth": "High Performing"
  },
  {
    "rowId": "HR-0063",
    "rootOrg": "AmeriLife",
    "agentName": "Olivia Green",
    "agentNpn": "8316648259",
    "agentId": "AGT-A-8259-063",
    "parentAgentNpn": "3328710672",
    "levelName": "District Manager",
    "levelId": 4,
    "lineOfBusiness": "ACA",
    "affiliateId": "AFF-003",
    "affiliateName": "Horizon Life Group",
    "carrier": "Ameritas",
    "status": "Pending",
    "state": "AZ",
    "effectiveDate": "2024-09-12",
    "terminationDate": null,
    "productionYtd": 190473,
    "policiesYtd": 39,
    "allAgentIdsForNpn": [
      "AGT-A-8259-063"
    ],
    "carriersForNpn": [
      "Ameritas"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Horizon Life Group > Rowan Stewart > Skyler Thompson > Olivia Green",
    "hierarchyPathCarrierFirst": "AmeriLife > Ameritas > Horizon Life Group > Olivia Green",
    "lineageHealth": "Pending"
  },
  {
    "rowId": "HR-0083",
    "rootOrg": "AmeriLife",
    "agentName": "Reese Moore",
    "agentNpn": "9780573290",
    "agentId": "AGT-A-3290-083",
    "parentAgentNpn": "5728765136",
    "levelName": "District Manager",
    "levelId": 4,
    "lineOfBusiness": "Annuity",
    "affiliateId": "AFF-003",
    "affiliateName": "Horizon Life Group",
    "carrier": "Ameritas",
    "status": "Active",
    "state": "OH",
    "effectiveDate": "2023-08-24",
    "terminationDate": null,
    "productionYtd": 139082,
    "policiesYtd": 75,
    "allAgentIdsForNpn": [
      "AGT-A-3290-083"
    ],
    "carriersForNpn": [
      "Ameritas"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Horizon Life Group > Rowan Stewart > Reese Moore",
    "hierarchyPathCarrierFirst": "AmeriLife > Ameritas > Horizon Life Group > Reese Moore",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0113",
    "rootOrg": "AmeriLife",
    "agentName": "Casey Young",
    "agentNpn": "9673185158",
    "agentId": "AGT-A-5158-113",
    "parentAgentNpn": "3328710672",
    "levelName": "Agent",
    "levelId": 5,
    "lineOfBusiness": "Life",
    "affiliateId": "AFF-003",
    "affiliateName": "Horizon Life Group",
    "carrier": "Anthem",
    "status": "Pending",
    "state": "NC",
    "effectiveDate": "2024-10-24",
    "terminationDate": null,
    "productionYtd": 185990,
    "policiesYtd": 163,
    "allAgentIdsForNpn": [
      "AGT-A-5158-113"
    ],
    "carriersForNpn": [
      "Anthem"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Horizon Life Group > Rowan Stewart > Skyler Thompson > Casey Young",
    "hierarchyPathCarrierFirst": "AmeriLife > Anthem > Horizon Life Group > Casey Young",
    "lineageHealth": "Pending"
  },
  {
    "rowId": "HR-0123",
    "rootOrg": "AmeriLife",
    "agentName": "Ethan Walker",
    "agentNpn": "7839626408",
    "agentId": "AGT-A-6408-123",
    "parentAgentNpn": "1405126228",
    "levelName": "Agent",
    "levelId": 5,
    "lineOfBusiness": "Medicare Supplement",
    "affiliateId": "AFF-003",
    "affiliateName": "Horizon Life Group",
    "carrier": "Allstate",
    "status": "Terminated",
    "state": "CA",
    "effectiveDate": "2023-08-16",
    "terminationDate": "2024-12-31",
    "productionYtd": 115281,
    "policiesYtd": 17,
    "allAgentIdsForNpn": [
      "AGT-A-6408-123"
    ],
    "carriersForNpn": [
      "Allstate"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Horizon Life Group > Rowan Stewart > Liam Brown > Ethan Walker",
    "hierarchyPathCarrierFirst": "AmeriLife > Allstate > Horizon Life Group > Ethan Walker",
    "lineageHealth": "At Risk"
  },
  {
    "rowId": "HR-0093",
    "rootOrg": "AmeriLife",
    "agentName": "Finley Miller",
    "agentNpn": "4464161270",
    "agentId": "AGT-H-1270-093",
    "parentAgentNpn": "8760038701",
    "levelName": "Agent",
    "levelId": 5,
    "lineOfBusiness": "Medicare Supplement",
    "affiliateId": "AFF-003",
    "affiliateName": "Horizon Life Group",
    "carrier": "Humana",
    "status": "Active",
    "state": "PA",
    "effectiveDate": "2025-09-09",
    "terminationDate": null,
    "productionYtd": 172159,
    "policiesYtd": 123,
    "allAgentIdsForNpn": [
      "AGT-H-1270-093"
    ],
    "carriersForNpn": [
      "Humana"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Horizon Life Group > Noah Patel > Mason Rivera > Finley Miller",
    "hierarchyPathCarrierFirst": "AmeriLife > Humana > Horizon Life Group > Finley Miller",
    "lineageHealth": "High Performing"
  },
  {
    "rowId": "HR-0143",
    "rootOrg": "AmeriLife",
    "agentName": "Alex Chen",
    "agentNpn": "7049536909",
    "agentId": "AGT-W-6909-143",
    "parentAgentNpn": "4482238042",
    "levelName": "Writing Agent",
    "levelId": 6,
    "lineOfBusiness": "Dental/Vision",
    "affiliateId": "AFF-003",
    "affiliateName": "Horizon Life Group",
    "carrier": "Wellcare",
    "status": "Pending",
    "state": "IL",
    "effectiveDate": "2021-02-18",
    "terminationDate": null,
    "productionYtd": 141497,
    "policiesYtd": 213,
    "allAgentIdsForNpn": [
      "AGT-W-6909-143"
    ],
    "carriersForNpn": [
      "Wellcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Horizon Life Group > Rowan Stewart > Liam Brown > Harper Johnson > Alex Chen",
    "hierarchyPathCarrierFirst": "AmeriLife > Wellcare > Horizon Life Group > Alex Chen",
    "lineageHealth": "Pending"
  },
  {
    "rowId": "HR-0103",
    "rootOrg": "AmeriLife",
    "agentName": "Sofia Martinez",
    "agentNpn": "4034047118",
    "agentId": "AGT-C-7118-103",
    "parentAgentNpn": "8316648259",
    "levelName": "Writing Agent",
    "levelId": 6,
    "lineOfBusiness": "PDP",
    "affiliateId": "AFF-003",
    "affiliateName": "Horizon Life Group",
    "carrier": "Cigna",
    "status": "Terminated",
    "state": "NY",
    "effectiveDate": "2020-07-22",
    "terminationDate": "2021-04-11",
    "productionYtd": 116159,
    "policiesYtd": 169,
    "allAgentIdsForNpn": [
      "AGT-C-7118-103"
    ],
    "carriersForNpn": [
      "Cigna"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Horizon Life Group > Rowan Stewart > Skyler Thompson > Olivia Green > Sofia Martinez",
    "hierarchyPathCarrierFirst": "AmeriLife > Cigna > Horizon Life Group > Sofia Martinez",
    "lineageHealth": "At Risk"
  },
  {
    "rowId": "HR-0160",
    "rootOrg": "AmeriLife",
    "agentName": "Zoe Nelson",
    "agentNpn": "6128695961",
    "agentId": "AGT-A-5961-160",
    "parentAgentNpn": "3328710672",
    "levelName": "Writing Agent",
    "levelId": 6,
    "lineOfBusiness": "Medicare Advantage",
    "affiliateId": "AFF-003",
    "affiliateName": "Horizon Life Group",
    "carrier": "Allstate",
    "status": "Pending",
    "state": "FL",
    "effectiveDate": "2025-09-10",
    "terminationDate": null,
    "productionYtd": 102355,
    "policiesYtd": 223,
    "allAgentIdsForNpn": [
      "AGT-A-5961-160",
      "AGT-C-5961-133"
    ],
    "carriersForNpn": [
      "Allstate",
      "Cigna"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Horizon Life Group > Rowan Stewart > Skyler Thompson > Zoe Nelson",
    "hierarchyPathCarrierFirst": "AmeriLife > Allstate > Horizon Life Group > Zoe Nelson",
    "lineageHealth": "Pending"
  },
  {
    "rowId": "HR-0133",
    "rootOrg": "AmeriLife",
    "agentName": "Zoe Nelson",
    "agentNpn": "6128695961",
    "agentId": "AGT-C-5961-133",
    "parentAgentNpn": "3328710672",
    "levelName": "Writing Agent",
    "levelId": 6,
    "lineOfBusiness": "PDP",
    "affiliateId": "AFF-003",
    "affiliateName": "Horizon Life Group",
    "carrier": "Cigna",
    "status": "Active",
    "state": "FL",
    "effectiveDate": "2024-01-30",
    "terminationDate": null,
    "productionYtd": 101558,
    "policiesYtd": 104,
    "allAgentIdsForNpn": [
      "AGT-A-5961-160",
      "AGT-C-5961-133"
    ],
    "carriersForNpn": [
      "Allstate",
      "Cigna"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Horizon Life Group > Rowan Stewart > Skyler Thompson > Zoe Nelson",
    "hierarchyPathCarrierFirst": "AmeriLife > Cigna > Horizon Life Group > Zoe Nelson",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0002",
    "rootOrg": "AmeriLife",
    "agentName": "Harper Miller",
    "agentNpn": "3342331444",
    "agentId": "AGT-W-1444-002",
    "parentAgentNpn": null,
    "levelName": "IMO / Top Agency",
    "levelId": 1,
    "lineOfBusiness": "Life",
    "affiliateId": "AFF-002",
    "affiliateName": "Keystone Benefit Partners",
    "carrier": "Wellcare",
    "status": "Pending",
    "state": "AZ",
    "effectiveDate": "2022-01-13",
    "terminationDate": null,
    "productionYtd": 166405,
    "policiesYtd": 208,
    "allAgentIdsForNpn": [
      "AGT-W-1444-002"
    ],
    "carriersForNpn": [
      "Wellcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Keystone Benefit Partners > Harper Miller",
    "hierarchyPathCarrierFirst": "AmeriLife > Wellcare > Keystone Benefit Partners > Harper Miller",
    "lineageHealth": "Pending"
  },
  {
    "rowId": "HR-0022",
    "rootOrg": "AmeriLife",
    "agentName": "Kendall Singh",
    "agentNpn": "7805745017",
    "agentId": "AGT-A-5017-022",
    "parentAgentNpn": null,
    "levelName": "Agency Principal",
    "levelId": 2,
    "lineOfBusiness": "Life",
    "affiliateId": "AFF-002",
    "affiliateName": "Keystone Benefit Partners",
    "carrier": "Ameritas",
    "status": "Active",
    "state": "TN",
    "effectiveDate": "2026-02-03",
    "terminationDate": null,
    "productionYtd": 84352,
    "policiesYtd": 222,
    "allAgentIdsForNpn": [
      "AGT-A-5017-022",
      "AGT-H-5017-163"
    ],
    "carriersForNpn": [
      "Ameritas",
      "Humana"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Keystone Benefit Partners > Kendall Singh",
    "hierarchyPathCarrierFirst": "AmeriLife > Ameritas > Keystone Benefit Partners > Kendall Singh",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0163",
    "rootOrg": "AmeriLife",
    "agentName": "Kendall Singh",
    "agentNpn": "7805745017",
    "agentId": "AGT-H-5017-163",
    "parentAgentNpn": null,
    "levelName": "Agency Principal",
    "levelId": 2,
    "lineOfBusiness": "Medicare Advantage",
    "affiliateId": "AFF-002",
    "affiliateName": "Keystone Benefit Partners",
    "carrier": "Humana",
    "status": "Active",
    "state": "TN",
    "effectiveDate": "2023-09-23",
    "terminationDate": null,
    "productionYtd": 92353,
    "policiesYtd": 139,
    "allAgentIdsForNpn": [
      "AGT-A-5017-022",
      "AGT-H-5017-163"
    ],
    "carriersForNpn": [
      "Ameritas",
      "Humana"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Keystone Benefit Partners > Kendall Singh",
    "hierarchyPathCarrierFirst": "AmeriLife > Humana > Keystone Benefit Partners > Kendall Singh",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0012",
    "rootOrg": "AmeriLife",
    "agentName": "Reese Parker",
    "agentNpn": "1298737106",
    "agentId": "AGT-A-7106-012",
    "parentAgentNpn": null,
    "levelName": "Agency Principal",
    "levelId": 2,
    "lineOfBusiness": "PDP",
    "affiliateId": "AFF-002",
    "affiliateName": "Keystone Benefit Partners",
    "carrier": "Allstate",
    "status": "Terminated",
    "state": "MI",
    "effectiveDate": "2022-09-07",
    "terminationDate": "2023-08-15",
    "productionYtd": 144399,
    "policiesYtd": 3,
    "allAgentIdsForNpn": [
      "AGT-A-7106-012"
    ],
    "carriersForNpn": [
      "Allstate"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Keystone Benefit Partners > Reese Parker",
    "hierarchyPathCarrierFirst": "AmeriLife > Allstate > Keystone Benefit Partners > Reese Parker",
    "lineageHealth": "At Risk"
  },
  {
    "rowId": "HR-0052",
    "rootOrg": "AmeriLife",
    "agentName": "Emerson Walker",
    "agentNpn": "3090237817",
    "agentId": "AGT-A-7817-052",
    "parentAgentNpn": "1298737106",
    "levelName": "Regional Manager",
    "levelId": 3,
    "lineOfBusiness": "PDP",
    "affiliateId": "AFF-002",
    "affiliateName": "Keystone Benefit Partners",
    "carrier": "Anthem",
    "status": "Pending",
    "state": "FL",
    "effectiveDate": "2025-12-14",
    "terminationDate": null,
    "productionYtd": 217703,
    "policiesYtd": 42,
    "allAgentIdsForNpn": [
      "AGT-A-7817-052",
      "AGT-W-7817-152"
    ],
    "carriersForNpn": [
      "Anthem",
      "Wellcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Keystone Benefit Partners > Reese Parker > Emerson Walker",
    "hierarchyPathCarrierFirst": "AmeriLife > Anthem > Keystone Benefit Partners > Emerson Walker",
    "lineageHealth": "Pending"
  },
  {
    "rowId": "HR-0152",
    "rootOrg": "AmeriLife",
    "agentName": "Emerson Walker",
    "agentNpn": "3090237817",
    "agentId": "AGT-W-7817-152",
    "parentAgentNpn": "1298737106",
    "levelName": "Regional Manager",
    "levelId": 3,
    "lineOfBusiness": "Annuity",
    "affiliateId": "AFF-002",
    "affiliateName": "Keystone Benefit Partners",
    "carrier": "Wellcare",
    "status": "Active",
    "state": "FL",
    "effectiveDate": "2022-06-02",
    "terminationDate": null,
    "productionYtd": 190640,
    "policiesYtd": 155,
    "allAgentIdsForNpn": [
      "AGT-A-7817-052",
      "AGT-W-7817-152"
    ],
    "carriersForNpn": [
      "Anthem",
      "Wellcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Keystone Benefit Partners > Reese Parker > Emerson Walker",
    "hierarchyPathCarrierFirst": "AmeriLife > Wellcare > Keystone Benefit Partners > Emerson Walker",
    "lineageHealth": "High Performing"
  },
  {
    "rowId": "HR-0161",
    "rootOrg": "AmeriLife",
    "agentName": "Mia Stewart",
    "agentNpn": "4944899549",
    "agentId": "AGT-A-9549-161",
    "parentAgentNpn": "1298737106",
    "levelName": "Regional Manager",
    "levelId": 3,
    "lineOfBusiness": "PDP",
    "affiliateId": "AFF-002",
    "affiliateName": "Keystone Benefit Partners",
    "carrier": "Ameritas",
    "status": "Terminated",
    "state": "AZ",
    "effectiveDate": "2020-06-27",
    "terminationDate": "2022-01-24",
    "productionYtd": 66492,
    "policiesYtd": 191,
    "allAgentIdsForNpn": [
      "AGT-A-9549-161",
      "AGT-W-9549-032"
    ],
    "carriersForNpn": [
      "Ameritas",
      "Wellcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Keystone Benefit Partners > Reese Parker > Mia Stewart",
    "hierarchyPathCarrierFirst": "AmeriLife > Ameritas > Keystone Benefit Partners > Mia Stewart",
    "lineageHealth": "At Risk"
  },
  {
    "rowId": "HR-0032",
    "rootOrg": "AmeriLife",
    "agentName": "Mia Stewart",
    "agentNpn": "4944899549",
    "agentId": "AGT-W-9549-032",
    "parentAgentNpn": "1298737106",
    "levelName": "Regional Manager",
    "levelId": 3,
    "lineOfBusiness": "Life",
    "affiliateId": "AFF-002",
    "affiliateName": "Keystone Benefit Partners",
    "carrier": "Wellcare",
    "status": "Terminated",
    "state": "AZ",
    "effectiveDate": "2022-07-20",
    "terminationDate": "2023-04-18",
    "productionYtd": 25806,
    "policiesYtd": 194,
    "allAgentIdsForNpn": [
      "AGT-A-9549-161",
      "AGT-W-9549-032"
    ],
    "carriersForNpn": [
      "Ameritas",
      "Wellcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Keystone Benefit Partners > Reese Parker > Mia Stewart",
    "hierarchyPathCarrierFirst": "AmeriLife > Wellcare > Keystone Benefit Partners > Mia Stewart",
    "lineageHealth": "At Risk"
  },
  {
    "rowId": "HR-0151",
    "rootOrg": "AmeriLife",
    "agentName": "Zoe Adams",
    "agentNpn": "7769777475",
    "agentId": "AGT-A-7475-151",
    "parentAgentNpn": "1298737106",
    "levelName": "Regional Manager",
    "levelId": 3,
    "lineOfBusiness": "Medicare Advantage",
    "affiliateId": "AFF-002",
    "affiliateName": "Keystone Benefit Partners",
    "carrier": "Ameritas",
    "status": "Pending",
    "state": "FL",
    "effectiveDate": "2025-01-11",
    "terminationDate": null,
    "productionYtd": 20768,
    "policiesYtd": 4,
    "allAgentIdsForNpn": [
      "AGT-A-7475-151",
      "AGT-DH-7475-042"
    ],
    "carriersForNpn": [
      "Ameritas",
      "Devoted Health"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Keystone Benefit Partners > Reese Parker > Zoe Adams",
    "hierarchyPathCarrierFirst": "AmeriLife > Ameritas > Keystone Benefit Partners > Zoe Adams",
    "lineageHealth": "Pending"
  },
  {
    "rowId": "HR-0042",
    "rootOrg": "AmeriLife",
    "agentName": "Zoe Adams",
    "agentNpn": "7769777475",
    "agentId": "AGT-DH-7475-042",
    "parentAgentNpn": "1298737106",
    "levelName": "Regional Manager",
    "levelId": 3,
    "lineOfBusiness": "Life",
    "affiliateId": "AFF-002",
    "affiliateName": "Keystone Benefit Partners",
    "carrier": "Devoted Health",
    "status": "Active",
    "state": "FL",
    "effectiveDate": "2023-05-22",
    "terminationDate": null,
    "productionYtd": 223696,
    "policiesYtd": 123,
    "allAgentIdsForNpn": [
      "AGT-A-7475-151",
      "AGT-DH-7475-042"
    ],
    "carriersForNpn": [
      "Ameritas",
      "Devoted Health"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Keystone Benefit Partners > Reese Parker > Zoe Adams",
    "hierarchyPathCarrierFirst": "AmeriLife > Devoted Health > Keystone Benefit Partners > Zoe Adams",
    "lineageHealth": "High Performing"
  },
  {
    "rowId": "HR-0062",
    "rootOrg": "AmeriLife",
    "agentName": "Ava Moore",
    "agentNpn": "6344160868",
    "agentId": "AGT-A-0868-062",
    "parentAgentNpn": "7805745017",
    "levelName": "District Manager",
    "levelId": 4,
    "lineOfBusiness": "Life",
    "affiliateId": "AFF-002",
    "affiliateName": "Keystone Benefit Partners",
    "carrier": "Ameritas",
    "status": "Active",
    "state": "TX",
    "effectiveDate": "2021-07-09",
    "terminationDate": null,
    "productionYtd": 97258,
    "policiesYtd": 171,
    "allAgentIdsForNpn": [
      "AGT-A-0868-062"
    ],
    "carriersForNpn": [
      "Ameritas"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Keystone Benefit Partners > Kendall Singh > Ava Moore",
    "hierarchyPathCarrierFirst": "AmeriLife > Ameritas > Keystone Benefit Partners > Ava Moore",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0072",
    "rootOrg": "AmeriLife",
    "agentName": "Leo Nguyen",
    "agentNpn": "9051829827",
    "agentId": "AGT-A-9827-072",
    "parentAgentNpn": "7805745017",
    "levelName": "District Manager",
    "levelId": 4,
    "lineOfBusiness": "Dental/Vision",
    "affiliateId": "AFF-002",
    "affiliateName": "Keystone Benefit Partners",
    "carrier": "Allstate",
    "status": "Active",
    "state": "AZ",
    "effectiveDate": "2020-01-12",
    "terminationDate": null,
    "productionYtd": 37929,
    "policiesYtd": 33,
    "allAgentIdsForNpn": [
      "AGT-A-9827-072"
    ],
    "carriersForNpn": [
      "Allstate"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Keystone Benefit Partners > Kendall Singh > Leo Nguyen",
    "hierarchyPathCarrierFirst": "AmeriLife > Allstate > Keystone Benefit Partners > Leo Nguyen",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0082",
    "rootOrg": "AmeriLife",
    "agentName": "Noah Carter",
    "agentNpn": "5791662169",
    "agentId": "AGT-H-2169-082",
    "parentAgentNpn": "3090237817",
    "levelName": "District Manager",
    "levelId": 4,
    "lineOfBusiness": "Annuity",
    "affiliateId": "AFF-002",
    "affiliateName": "Keystone Benefit Partners",
    "carrier": "Humana",
    "status": "Active",
    "state": "TN",
    "effectiveDate": "2021-05-31",
    "terminationDate": null,
    "productionYtd": 165957,
    "policiesYtd": 149,
    "allAgentIdsForNpn": [
      "AGT-H-2169-082"
    ],
    "carriersForNpn": [
      "Humana"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Keystone Benefit Partners > Reese Parker > Emerson Walker > Noah Carter",
    "hierarchyPathCarrierFirst": "AmeriLife > Humana > Keystone Benefit Partners > Noah Carter",
    "lineageHealth": "High Performing"
  },
  {
    "rowId": "HR-0092",
    "rootOrg": "AmeriLife",
    "agentName": "Casey Anderson",
    "agentNpn": "2439622619",
    "agentId": "AGT-MOO-2619-092",
    "parentAgentNpn": "5791662169",
    "levelName": "Agent",
    "levelId": 5,
    "lineOfBusiness": "Annuity",
    "affiliateId": "AFF-002",
    "affiliateName": "Keystone Benefit Partners",
    "carrier": "Mutual of Omaha",
    "status": "Active",
    "state": "MA",
    "effectiveDate": "2020-07-29",
    "terminationDate": null,
    "productionYtd": 81906,
    "policiesYtd": 90,
    "allAgentIdsForNpn": [
      "AGT-MOO-2619-092",
      "AGT-W-2619-190"
    ],
    "carriersForNpn": [
      "Mutual of Omaha",
      "Wellcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Keystone Benefit Partners > Reese Parker > Emerson Walker > Noah Carter > Casey Anderson",
    "hierarchyPathCarrierFirst": "AmeriLife > Mutual of Omaha > Keystone Benefit Partners > Casey Anderson",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0190",
    "rootOrg": "AmeriLife",
    "agentName": "Casey Anderson",
    "agentNpn": "2439622619",
    "agentId": "AGT-W-2619-190",
    "parentAgentNpn": "5791662169",
    "levelName": "Agent",
    "levelId": 5,
    "lineOfBusiness": "ACA",
    "affiliateId": "AFF-002",
    "affiliateName": "Keystone Benefit Partners",
    "carrier": "Wellcare",
    "status": "Terminated",
    "state": "MA",
    "effectiveDate": "2021-10-07",
    "terminationDate": "2024-03-31",
    "productionYtd": 167169,
    "policiesYtd": 44,
    "allAgentIdsForNpn": [
      "AGT-MOO-2619-092",
      "AGT-W-2619-190"
    ],
    "carriersForNpn": [
      "Mutual of Omaha",
      "Wellcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Keystone Benefit Partners > Reese Parker > Emerson Walker > Noah Carter > Casey Anderson",
    "hierarchyPathCarrierFirst": "AmeriLife > Wellcare > Keystone Benefit Partners > Casey Anderson",
    "lineageHealth": "At Risk"
  },
  {
    "rowId": "HR-0102",
    "rootOrg": "AmeriLife",
    "agentName": "Jessica Green",
    "agentNpn": "1346078411",
    "agentId": "AGT-A-8411-102",
    "parentAgentNpn": "6344160868",
    "levelName": "Agent",
    "levelId": 5,
    "lineOfBusiness": "Medicare Advantage",
    "affiliateId": "AFF-002",
    "affiliateName": "Keystone Benefit Partners",
    "carrier": "Anthem",
    "status": "Pending",
    "state": "PA",
    "effectiveDate": "2026-05-13",
    "terminationDate": null,
    "productionYtd": 13791,
    "policiesYtd": 39,
    "allAgentIdsForNpn": [
      "AGT-A-8411-102",
      "AGT-MOO-8411-193"
    ],
    "carriersForNpn": [
      "Anthem",
      "Mutual of Omaha"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Keystone Benefit Partners > Kendall Singh > Ava Moore > Jessica Green",
    "hierarchyPathCarrierFirst": "AmeriLife > Anthem > Keystone Benefit Partners > Jessica Green",
    "lineageHealth": "Pending"
  },
  {
    "rowId": "HR-0193",
    "rootOrg": "AmeriLife",
    "agentName": "Jessica Green",
    "agentNpn": "1346078411",
    "agentId": "AGT-MOO-8411-193",
    "parentAgentNpn": "6344160868",
    "levelName": "Agent",
    "levelId": 5,
    "lineOfBusiness": "Medicare Supplement",
    "affiliateId": "AFF-002",
    "affiliateName": "Keystone Benefit Partners",
    "carrier": "Mutual of Omaha",
    "status": "Pending",
    "state": "PA",
    "effectiveDate": "2025-03-29",
    "terminationDate": null,
    "productionYtd": 160418,
    "policiesYtd": 226,
    "allAgentIdsForNpn": [
      "AGT-A-8411-102",
      "AGT-MOO-8411-193"
    ],
    "carriersForNpn": [
      "Anthem",
      "Mutual of Omaha"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Keystone Benefit Partners > Kendall Singh > Ava Moore > Jessica Green",
    "hierarchyPathCarrierFirst": "AmeriLife > Mutual of Omaha > Keystone Benefit Partners > Jessica Green",
    "lineageHealth": "Pending"
  },
  {
    "rowId": "HR-0142",
    "rootOrg": "AmeriLife",
    "agentName": "Nora Davis",
    "agentNpn": "1348697524",
    "agentId": "AGT-DH-7524-142",
    "parentAgentNpn": "7769777475",
    "levelName": "Agent",
    "levelId": 5,
    "lineOfBusiness": "Medicare Supplement",
    "affiliateId": "AFF-002",
    "affiliateName": "Keystone Benefit Partners",
    "carrier": "Devoted Health",
    "status": "Active",
    "state": "FL",
    "effectiveDate": "2022-02-25",
    "terminationDate": null,
    "productionYtd": 40617,
    "policiesYtd": 19,
    "allAgentIdsForNpn": [
      "AGT-DH-7524-142",
      "AGT-U-7524-158"
    ],
    "carriersForNpn": [
      "Devoted Health",
      "UnitedHealthcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Keystone Benefit Partners > Reese Parker > Zoe Adams > Nora Davis",
    "hierarchyPathCarrierFirst": "AmeriLife > Devoted Health > Keystone Benefit Partners > Nora Davis",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0158",
    "rootOrg": "AmeriLife",
    "agentName": "Nora Davis",
    "agentNpn": "1348697524",
    "agentId": "AGT-U-7524-158",
    "parentAgentNpn": "7769777475",
    "levelName": "Agent",
    "levelId": 5,
    "lineOfBusiness": "Medicare Supplement",
    "affiliateId": "AFF-002",
    "affiliateName": "Keystone Benefit Partners",
    "carrier": "UnitedHealthcare",
    "status": "Active",
    "state": "FL",
    "effectiveDate": "2026-05-26",
    "terminationDate": null,
    "productionYtd": 174160,
    "policiesYtd": 171,
    "allAgentIdsForNpn": [
      "AGT-DH-7524-142",
      "AGT-U-7524-158"
    ],
    "carriersForNpn": [
      "Devoted Health",
      "UnitedHealthcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Keystone Benefit Partners > Reese Parker > Zoe Adams > Nora Davis",
    "hierarchyPathCarrierFirst": "AmeriLife > UnitedHealthcare > Keystone Benefit Partners > Nora Davis",
    "lineageHealth": "High Performing"
  },
  {
    "rowId": "HR-0112",
    "rootOrg": "AmeriLife",
    "agentName": "Ethan Jackson",
    "agentNpn": "9072992279",
    "agentId": "AGT-A-2279-112",
    "parentAgentNpn": "9051829827",
    "levelName": "Writing Agent",
    "levelId": 6,
    "lineOfBusiness": "Life",
    "affiliateId": "AFF-002",
    "affiliateName": "Keystone Benefit Partners",
    "carrier": "Aetna",
    "status": "Active",
    "state": "TX",
    "effectiveDate": "2024-11-21",
    "terminationDate": null,
    "productionYtd": 20411,
    "policiesYtd": 220,
    "allAgentIdsForNpn": [
      "AGT-A-2279-112",
      "AGT-W-2279-169"
    ],
    "carriersForNpn": [
      "Aetna",
      "Wellcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Keystone Benefit Partners > Kendall Singh > Leo Nguyen > Ethan Jackson",
    "hierarchyPathCarrierFirst": "AmeriLife > Aetna > Keystone Benefit Partners > Ethan Jackson",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0169",
    "rootOrg": "AmeriLife",
    "agentName": "Ethan Jackson",
    "agentNpn": "9072992279",
    "agentId": "AGT-W-2279-169",
    "parentAgentNpn": "9051829827",
    "levelName": "Writing Agent",
    "levelId": 6,
    "lineOfBusiness": "Dental/Vision",
    "affiliateId": "AFF-002",
    "affiliateName": "Keystone Benefit Partners",
    "carrier": "Wellcare",
    "status": "Active",
    "state": "TX",
    "effectiveDate": "2023-03-17",
    "terminationDate": null,
    "productionYtd": 204692,
    "policiesYtd": 12,
    "allAgentIdsForNpn": [
      "AGT-A-2279-112",
      "AGT-W-2279-169"
    ],
    "carriersForNpn": [
      "Aetna",
      "Wellcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Keystone Benefit Partners > Kendall Singh > Leo Nguyen > Ethan Jackson",
    "hierarchyPathCarrierFirst": "AmeriLife > Wellcare > Keystone Benefit Partners > Ethan Jackson",
    "lineageHealth": "High Performing"
  },
  {
    "rowId": "HR-0122",
    "rootOrg": "AmeriLife",
    "agentName": "Mason Nguyen",
    "agentNpn": "5952059278",
    "agentId": "AGT-DH-9278-122",
    "parentAgentNpn": "1346078411",
    "levelName": "Writing Agent",
    "levelId": 6,
    "lineOfBusiness": "Dental/Vision",
    "affiliateId": "AFF-002",
    "affiliateName": "Keystone Benefit Partners",
    "carrier": "Devoted Health",
    "status": "Pending",
    "state": "PA",
    "effectiveDate": "2025-03-15",
    "terminationDate": null,
    "productionYtd": 151904,
    "policiesYtd": 114,
    "allAgentIdsForNpn": [
      "AGT-DH-9278-122"
    ],
    "carriersForNpn": [
      "Devoted Health"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Keystone Benefit Partners > Kendall Singh > Ava Moore > Jessica Green > Mason Nguyen",
    "hierarchyPathCarrierFirst": "AmeriLife > Devoted Health > Keystone Benefit Partners > Mason Nguyen",
    "lineageHealth": "Pending"
  },
  {
    "rowId": "HR-0167",
    "rootOrg": "AmeriLife",
    "agentName": "Quinn Edwards",
    "agentNpn": "1795212538",
    "agentId": "AGT-A-2538-167",
    "parentAgentNpn": "9051829827",
    "levelName": "Writing Agent",
    "levelId": 6,
    "lineOfBusiness": "Annuity",
    "affiliateId": "AFF-002",
    "affiliateName": "Keystone Benefit Partners",
    "carrier": "Aetna",
    "status": "Active",
    "state": "FL",
    "effectiveDate": "2023-07-16",
    "terminationDate": null,
    "productionYtd": 104392,
    "policiesYtd": 208,
    "allAgentIdsForNpn": [
      "AGT-A-2538-167",
      "AGT-U-2538-132"
    ],
    "carriersForNpn": [
      "Aetna",
      "UnitedHealthcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Keystone Benefit Partners > Kendall Singh > Leo Nguyen > Quinn Edwards",
    "hierarchyPathCarrierFirst": "AmeriLife > Aetna > Keystone Benefit Partners > Quinn Edwards",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0132",
    "rootOrg": "AmeriLife",
    "agentName": "Quinn Edwards",
    "agentNpn": "1795212538",
    "agentId": "AGT-U-2538-132",
    "parentAgentNpn": "9051829827",
    "levelName": "Writing Agent",
    "levelId": 6,
    "lineOfBusiness": "Annuity",
    "affiliateId": "AFF-002",
    "affiliateName": "Keystone Benefit Partners",
    "carrier": "UnitedHealthcare",
    "status": "Active",
    "state": "FL",
    "effectiveDate": "2024-11-28",
    "terminationDate": null,
    "productionYtd": 137035,
    "policiesYtd": 156,
    "allAgentIdsForNpn": [
      "AGT-A-2538-167",
      "AGT-U-2538-132"
    ],
    "carriersForNpn": [
      "Aetna",
      "UnitedHealthcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Keystone Benefit Partners > Kendall Singh > Leo Nguyen > Quinn Edwards",
    "hierarchyPathCarrierFirst": "AmeriLife > UnitedHealthcare > Keystone Benefit Partners > Quinn Edwards",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0005",
    "rootOrg": "AmeriLife",
    "agentName": "Reese Parker",
    "agentNpn": "7635473142",
    "agentId": "AGT-DH-3142-005",
    "parentAgentNpn": null,
    "levelName": "IMO / Top Agency",
    "levelId": 1,
    "lineOfBusiness": "Life",
    "affiliateId": "AFF-005",
    "affiliateName": "Legacy Insurance Network",
    "carrier": "Devoted Health",
    "status": "Terminated",
    "state": "FL",
    "effectiveDate": "2023-03-26",
    "terminationDate": "2026-05-16",
    "productionYtd": 213271,
    "policiesYtd": 194,
    "allAgentIdsForNpn": [
      "AGT-DH-3142-005",
      "AGT-H-3142-196"
    ],
    "carriersForNpn": [
      "Devoted Health",
      "Humana"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Legacy Insurance Network > Reese Parker",
    "hierarchyPathCarrierFirst": "AmeriLife > Devoted Health > Legacy Insurance Network > Reese Parker",
    "lineageHealth": "At Risk"
  },
  {
    "rowId": "HR-0196",
    "rootOrg": "AmeriLife",
    "agentName": "Reese Parker",
    "agentNpn": "7635473142",
    "agentId": "AGT-H-3142-196",
    "parentAgentNpn": null,
    "levelName": "IMO / Top Agency",
    "levelId": 1,
    "lineOfBusiness": "ACA",
    "affiliateId": "AFF-005",
    "affiliateName": "Legacy Insurance Network",
    "carrier": "Humana",
    "status": "Active",
    "state": "FL",
    "effectiveDate": "2021-05-28",
    "terminationDate": null,
    "productionYtd": 19441,
    "policiesYtd": 115,
    "allAgentIdsForNpn": [
      "AGT-DH-3142-005",
      "AGT-H-3142-196"
    ],
    "carriersForNpn": [
      "Devoted Health",
      "Humana"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Legacy Insurance Network > Reese Parker",
    "hierarchyPathCarrierFirst": "AmeriLife > Humana > Legacy Insurance Network > Reese Parker",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0025",
    "rootOrg": "AmeriLife",
    "agentName": "Alex Phillips",
    "agentNpn": "5567816720",
    "agentId": "AGT-MOO-6720-025",
    "parentAgentNpn": null,
    "levelName": "Agency Principal",
    "levelId": 2,
    "lineOfBusiness": "Dental/Vision",
    "affiliateId": "AFF-005",
    "affiliateName": "Legacy Insurance Network",
    "carrier": "Mutual of Omaha",
    "status": "Terminated",
    "state": "OH",
    "effectiveDate": "2024-04-30",
    "terminationDate": "2027-01-16",
    "productionYtd": 170922,
    "policiesYtd": 38,
    "allAgentIdsForNpn": [
      "AGT-MOO-6720-025"
    ],
    "carriersForNpn": [
      "Mutual of Omaha"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Legacy Insurance Network > Alex Phillips",
    "hierarchyPathCarrierFirst": "AmeriLife > Mutual of Omaha > Legacy Insurance Network > Alex Phillips",
    "lineageHealth": "At Risk"
  },
  {
    "rowId": "HR-0015",
    "rootOrg": "AmeriLife",
    "agentName": "Daniel Harris",
    "agentNpn": "3783290795",
    "agentId": "AGT-DH-0795-015",
    "parentAgentNpn": null,
    "levelName": "Agency Principal",
    "levelId": 2,
    "lineOfBusiness": "ACA",
    "affiliateId": "AFF-005",
    "affiliateName": "Legacy Insurance Network",
    "carrier": "Devoted Health",
    "status": "Pending",
    "state": "AZ",
    "effectiveDate": "2023-04-10",
    "terminationDate": null,
    "productionYtd": 71676,
    "policiesYtd": 106,
    "allAgentIdsForNpn": [
      "AGT-DH-0795-015"
    ],
    "carriersForNpn": [
      "Devoted Health"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Legacy Insurance Network > Daniel Harris",
    "hierarchyPathCarrierFirst": "AmeriLife > Devoted Health > Legacy Insurance Network > Daniel Harris",
    "lineageHealth": "Pending"
  },
  {
    "rowId": "HR-0055",
    "rootOrg": "AmeriLife",
    "agentName": "Alex Thompson",
    "agentNpn": "1798112150",
    "agentId": "AGT-MOO-2150-055",
    "parentAgentNpn": "7635473142",
    "levelName": "Regional Manager",
    "levelId": 3,
    "lineOfBusiness": "Medicare Advantage",
    "affiliateId": "AFF-005",
    "affiliateName": "Legacy Insurance Network",
    "carrier": "Mutual of Omaha",
    "status": "Active",
    "state": "AZ",
    "effectiveDate": "2026-04-01",
    "terminationDate": null,
    "productionYtd": 207272,
    "policiesYtd": 101,
    "allAgentIdsForNpn": [
      "AGT-MOO-2150-055"
    ],
    "carriersForNpn": [
      "Mutual of Omaha"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Legacy Insurance Network > Reese Parker > Alex Thompson",
    "hierarchyPathCarrierFirst": "AmeriLife > Mutual of Omaha > Legacy Insurance Network > Alex Thompson",
    "lineageHealth": "High Performing"
  },
  {
    "rowId": "HR-0035",
    "rootOrg": "AmeriLife",
    "agentName": "Mason Rodriguez",
    "agentNpn": "1540137296",
    "agentId": "AGT-A-7296-035",
    "parentAgentNpn": "3783290795",
    "levelName": "Regional Manager",
    "levelId": 3,
    "lineOfBusiness": "Medicare Supplement",
    "affiliateId": "AFF-005",
    "affiliateName": "Legacy Insurance Network",
    "carrier": "Anthem",
    "status": "Active",
    "state": "MI",
    "effectiveDate": "2024-03-15",
    "terminationDate": null,
    "productionYtd": 64014,
    "policiesYtd": 135,
    "allAgentIdsForNpn": [
      "AGT-A-7296-035"
    ],
    "carriersForNpn": [
      "Anthem"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Legacy Insurance Network > Daniel Harris > Mason Rodriguez",
    "hierarchyPathCarrierFirst": "AmeriLife > Anthem > Legacy Insurance Network > Mason Rodriguez",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0045",
    "rootOrg": "AmeriLife",
    "agentName": "Morgan Phillips",
    "agentNpn": "3775320897",
    "agentId": "AGT-W-0897-045",
    "parentAgentNpn": "3783290795",
    "levelName": "Regional Manager",
    "levelId": 3,
    "lineOfBusiness": "Dental/Vision",
    "affiliateId": "AFF-005",
    "affiliateName": "Legacy Insurance Network",
    "carrier": "Wellcare",
    "status": "Pending",
    "state": "NJ",
    "effectiveDate": "2020-02-03",
    "terminationDate": null,
    "productionYtd": 179778,
    "policiesYtd": 199,
    "allAgentIdsForNpn": [
      "AGT-W-0897-045"
    ],
    "carriersForNpn": [
      "Wellcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Legacy Insurance Network > Daniel Harris > Morgan Phillips",
    "hierarchyPathCarrierFirst": "AmeriLife > Wellcare > Legacy Insurance Network > Morgan Phillips",
    "lineageHealth": "Pending"
  },
  {
    "rowId": "HR-0154",
    "rootOrg": "AmeriLife",
    "agentName": "Kendall Garcia",
    "agentNpn": "4821286999",
    "agentId": "AGT-A-6999-154",
    "parentAgentNpn": "1798112150",
    "levelName": "District Manager",
    "levelId": 4,
    "lineOfBusiness": "Medicare Supplement",
    "affiliateId": "AFF-005",
    "affiliateName": "Legacy Insurance Network",
    "carrier": "Anthem",
    "status": "Active",
    "state": "IL",
    "effectiveDate": "2021-05-14",
    "terminationDate": null,
    "productionYtd": 110054,
    "policiesYtd": 163,
    "allAgentIdsForNpn": [
      "AGT-A-6999-154",
      "AGT-W-6999-065"
    ],
    "carriersForNpn": [
      "Anthem",
      "Wellcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Legacy Insurance Network > Reese Parker > Alex Thompson > Kendall Garcia",
    "hierarchyPathCarrierFirst": "AmeriLife > Anthem > Legacy Insurance Network > Kendall Garcia",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0065",
    "rootOrg": "AmeriLife",
    "agentName": "Kendall Garcia",
    "agentNpn": "4821286999",
    "agentId": "AGT-W-6999-065",
    "parentAgentNpn": "1798112150",
    "levelName": "District Manager",
    "levelId": 4,
    "lineOfBusiness": "Medicare Supplement",
    "affiliateId": "AFF-005",
    "affiliateName": "Legacy Insurance Network",
    "carrier": "Wellcare",
    "status": "Terminated",
    "state": "IL",
    "effectiveDate": "2020-05-14",
    "terminationDate": "2021-11-24",
    "productionYtd": 116230,
    "policiesYtd": 113,
    "allAgentIdsForNpn": [
      "AGT-A-6999-154",
      "AGT-W-6999-065"
    ],
    "carriersForNpn": [
      "Anthem",
      "Wellcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Legacy Insurance Network > Reese Parker > Alex Thompson > Kendall Garcia",
    "hierarchyPathCarrierFirst": "AmeriLife > Wellcare > Legacy Insurance Network > Kendall Garcia",
    "lineageHealth": "At Risk"
  },
  {
    "rowId": "HR-0085",
    "rootOrg": "AmeriLife",
    "agentName": "Leo White",
    "agentNpn": "7971399399",
    "agentId": "AGT-H-9399-085",
    "parentAgentNpn": "3783290795",
    "levelName": "District Manager",
    "levelId": 4,
    "lineOfBusiness": "Medicare Supplement",
    "affiliateId": "AFF-005",
    "affiliateName": "Legacy Insurance Network",
    "carrier": "Humana",
    "status": "Terminated",
    "state": "MI",
    "effectiveDate": "2026-03-08",
    "terminationDate": "2029-02-06",
    "productionYtd": 112740,
    "policiesYtd": 115,
    "allAgentIdsForNpn": [
      "AGT-H-9399-085"
    ],
    "carriersForNpn": [
      "Humana"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Legacy Insurance Network > Daniel Harris > Leo White",
    "hierarchyPathCarrierFirst": "AmeriLife > Humana > Legacy Insurance Network > Leo White",
    "lineageHealth": "At Risk"
  },
  {
    "rowId": "HR-0075",
    "rootOrg": "AmeriLife",
    "agentName": "Logan Johnson",
    "agentNpn": "5759234471",
    "agentId": "AGT-U-4471-075",
    "parentAgentNpn": "3783290795",
    "levelName": "District Manager",
    "levelId": 4,
    "lineOfBusiness": "Medicare Supplement",
    "affiliateId": "AFF-005",
    "affiliateName": "Legacy Insurance Network",
    "carrier": "UnitedHealthcare",
    "status": "Active",
    "state": "MA",
    "effectiveDate": "2023-08-19",
    "terminationDate": null,
    "productionYtd": 69564,
    "policiesYtd": 13,
    "allAgentIdsForNpn": [
      "AGT-U-4471-075"
    ],
    "carriersForNpn": [
      "UnitedHealthcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Legacy Insurance Network > Daniel Harris > Logan Johnson",
    "hierarchyPathCarrierFirst": "AmeriLife > UnitedHealthcare > Legacy Insurance Network > Logan Johnson",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0095",
    "rootOrg": "AmeriLife",
    "agentName": "Charlotte Brown",
    "agentNpn": "6944142262",
    "agentId": "AGT-H-2262-095",
    "parentAgentNpn": "3775320897",
    "levelName": "Agent",
    "levelId": 5,
    "lineOfBusiness": "Medicare Supplement",
    "affiliateId": "AFF-005",
    "affiliateName": "Legacy Insurance Network",
    "carrier": "Humana",
    "status": "Pending",
    "state": "OH",
    "effectiveDate": "2023-02-15",
    "terminationDate": null,
    "productionYtd": 211608,
    "policiesYtd": 109,
    "allAgentIdsForNpn": [
      "AGT-H-2262-095"
    ],
    "carriersForNpn": [
      "Humana"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Legacy Insurance Network > Daniel Harris > Morgan Phillips > Charlotte Brown",
    "hierarchyPathCarrierFirst": "AmeriLife > Humana > Legacy Insurance Network > Charlotte Brown",
    "lineageHealth": "Pending"
  },
  {
    "rowId": "HR-0115",
    "rootOrg": "AmeriLife",
    "agentName": "Drew Wilson",
    "agentNpn": "5837082260",
    "agentId": "AGT-C-2260-115",
    "parentAgentNpn": "5759234471",
    "levelName": "Agent",
    "levelId": 5,
    "lineOfBusiness": "PDP",
    "affiliateId": "AFF-005",
    "affiliateName": "Legacy Insurance Network",
    "carrier": "Cigna",
    "status": "Terminated",
    "state": "MI",
    "effectiveDate": "2025-02-27",
    "terminationDate": "2028-03-24",
    "productionYtd": 23102,
    "policiesYtd": 111,
    "allAgentIdsForNpn": [
      "AGT-C-2260-115"
    ],
    "carriersForNpn": [
      "Cigna"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Legacy Insurance Network > Daniel Harris > Logan Johnson > Drew Wilson",
    "hierarchyPathCarrierFirst": "AmeriLife > Cigna > Legacy Insurance Network > Drew Wilson",
    "lineageHealth": "At Risk"
  },
  {
    "rowId": "HR-0145",
    "rootOrg": "AmeriLife",
    "agentName": "Nora Nelson",
    "agentNpn": "5010075517",
    "agentId": "AGT-A-5517-145",
    "parentAgentNpn": "8528185058",
    "levelName": "Agent",
    "levelId": 5,
    "lineOfBusiness": "Medicare Supplement",
    "affiliateId": "AFF-005",
    "affiliateName": "Legacy Insurance Network",
    "carrier": "Allstate",
    "status": "Active",
    "state": "OH",
    "effectiveDate": "2024-03-23",
    "terminationDate": null,
    "productionYtd": 47407,
    "policiesYtd": 212,
    "allAgentIdsForNpn": [
      "AGT-A-5517-145"
    ],
    "carriersForNpn": [
      "Allstate"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Legacy Insurance Network > Daniel Harris > Logan Johnson > Sofia Singh > Nora Nelson",
    "hierarchyPathCarrierFirst": "AmeriLife > Allstate > Legacy Insurance Network > Nora Nelson",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0172",
    "rootOrg": "AmeriLife",
    "agentName": "Sofia Singh",
    "agentNpn": "8528185058",
    "agentId": "AGT-A-5058-172",
    "parentAgentNpn": "5759234471",
    "levelName": "Agent",
    "levelId": 5,
    "lineOfBusiness": "PDP",
    "affiliateId": "AFF-005",
    "affiliateName": "Legacy Insurance Network",
    "carrier": "Ameritas",
    "status": "Pending",
    "state": "NY",
    "effectiveDate": "2024-02-13",
    "terminationDate": null,
    "productionYtd": 210016,
    "policiesYtd": 21,
    "allAgentIdsForNpn": [
      "AGT-A-5058-172",
      "AGT-H-5058-135"
    ],
    "carriersForNpn": [
      "Ameritas",
      "Humana"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Legacy Insurance Network > Daniel Harris > Logan Johnson > Sofia Singh",
    "hierarchyPathCarrierFirst": "AmeriLife > Ameritas > Legacy Insurance Network > Sofia Singh",
    "lineageHealth": "Pending"
  },
  {
    "rowId": "HR-0135",
    "rootOrg": "AmeriLife",
    "agentName": "Sofia Singh",
    "agentNpn": "8528185058",
    "agentId": "AGT-H-5058-135",
    "parentAgentNpn": "5759234471",
    "levelName": "Agent",
    "levelId": 5,
    "lineOfBusiness": "PDP",
    "affiliateId": "AFF-005",
    "affiliateName": "Legacy Insurance Network",
    "carrier": "Humana",
    "status": "Terminated",
    "state": "NY",
    "effectiveDate": "2026-04-04",
    "terminationDate": "2027-10-31",
    "productionYtd": 66059,
    "policiesYtd": 185,
    "allAgentIdsForNpn": [
      "AGT-A-5058-172",
      "AGT-H-5058-135"
    ],
    "carriersForNpn": [
      "Ameritas",
      "Humana"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Legacy Insurance Network > Daniel Harris > Logan Johnson > Sofia Singh",
    "hierarchyPathCarrierFirst": "AmeriLife > Humana > Legacy Insurance Network > Sofia Singh",
    "lineageHealth": "At Risk"
  },
  {
    "rowId": "HR-0125",
    "rootOrg": "AmeriLife",
    "agentName": "Jamie King",
    "agentNpn": "6206015111",
    "agentId": "AGT-A-5111-125",
    "parentAgentNpn": "7971399399",
    "levelName": "Writing Agent",
    "levelId": 6,
    "lineOfBusiness": "Medicare Advantage",
    "affiliateId": "AFF-005",
    "affiliateName": "Legacy Insurance Network",
    "carrier": "Aetna",
    "status": "Pending",
    "state": "VA",
    "effectiveDate": "2023-12-12",
    "terminationDate": null,
    "productionYtd": 81371,
    "policiesYtd": 118,
    "allAgentIdsForNpn": [
      "AGT-A-5111-125"
    ],
    "carriersForNpn": [
      "Aetna"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Legacy Insurance Network > Daniel Harris > Leo White > Jamie King",
    "hierarchyPathCarrierFirst": "AmeriLife > Aetna > Legacy Insurance Network > Jamie King",
    "lineageHealth": "Pending"
  },
  {
    "rowId": "HR-0105",
    "rootOrg": "AmeriLife",
    "agentName": "Sophia Stewart",
    "agentNpn": "3987248494",
    "agentId": "AGT-U-8494-105",
    "parentAgentNpn": "4821286999",
    "levelName": "Writing Agent",
    "levelId": 6,
    "lineOfBusiness": "PDP",
    "affiliateId": "AFF-005",
    "affiliateName": "Legacy Insurance Network",
    "carrier": "UnitedHealthcare",
    "status": "Active",
    "state": "MA",
    "effectiveDate": "2025-09-29",
    "terminationDate": null,
    "productionYtd": 112699,
    "policiesYtd": 28,
    "allAgentIdsForNpn": [
      "AGT-U-8494-105"
    ],
    "carriersForNpn": [
      "UnitedHealthcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Legacy Insurance Network > Reese Parker > Alex Thompson > Kendall Garcia > Sophia Stewart",
    "hierarchyPathCarrierFirst": "AmeriLife > UnitedHealthcare > Legacy Insurance Network > Sophia Stewart",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0007",
    "rootOrg": "AmeriLife",
    "agentName": "Alex Campbell",
    "agentNpn": "7110082321",
    "agentId": "AGT-A-2321-007",
    "parentAgentNpn": null,
    "levelName": "IMO / Top Agency",
    "levelId": 1,
    "lineOfBusiness": "Dental/Vision",
    "affiliateId": "AFF-007",
    "affiliateName": "Northstar Senior Benefits",
    "carrier": "Anthem",
    "status": "Active",
    "state": "TX",
    "effectiveDate": "2021-04-19",
    "terminationDate": null,
    "productionYtd": 134898,
    "policiesYtd": 211,
    "allAgentIdsForNpn": [
      "AGT-A-2321-007",
      "AGT-MOO-2321-177"
    ],
    "carriersForNpn": [
      "Anthem",
      "Mutual of Omaha"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Northstar Senior Benefits > Alex Campbell",
    "hierarchyPathCarrierFirst": "AmeriLife > Anthem > Northstar Senior Benefits > Alex Campbell",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0177",
    "rootOrg": "AmeriLife",
    "agentName": "Alex Campbell",
    "agentNpn": "7110082321",
    "agentId": "AGT-MOO-2321-177",
    "parentAgentNpn": null,
    "levelName": "IMO / Top Agency",
    "levelId": 1,
    "lineOfBusiness": "ACA",
    "affiliateId": "AFF-007",
    "affiliateName": "Northstar Senior Benefits",
    "carrier": "Mutual of Omaha",
    "status": "Active",
    "state": "TX",
    "effectiveDate": "2024-11-16",
    "terminationDate": null,
    "productionYtd": 207481,
    "policiesYtd": 14,
    "allAgentIdsForNpn": [
      "AGT-A-2321-007",
      "AGT-MOO-2321-177"
    ],
    "carriersForNpn": [
      "Anthem",
      "Mutual of Omaha"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Northstar Senior Benefits > Alex Campbell",
    "hierarchyPathCarrierFirst": "AmeriLife > Mutual of Omaha > Northstar Senior Benefits > Alex Campbell",
    "lineageHealth": "High Performing"
  },
  {
    "rowId": "HR-0159",
    "rootOrg": "AmeriLife",
    "agentName": "Avery Phillips",
    "agentNpn": "4095476665",
    "agentId": "AGT-C-6665-159",
    "parentAgentNpn": null,
    "levelName": "Agency Principal",
    "levelId": 2,
    "lineOfBusiness": "Medicare Advantage",
    "affiliateId": "AFF-007",
    "affiliateName": "Northstar Senior Benefits",
    "carrier": "Cigna",
    "status": "Active",
    "state": "MI",
    "effectiveDate": "2025-11-14",
    "terminationDate": null,
    "productionYtd": 137903,
    "policiesYtd": 139,
    "allAgentIdsForNpn": [
      "AGT-C-6665-159",
      "AGT-H-6665-027"
    ],
    "carriersForNpn": [
      "Cigna",
      "Humana"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Northstar Senior Benefits > Avery Phillips",
    "hierarchyPathCarrierFirst": "AmeriLife > Cigna > Northstar Senior Benefits > Avery Phillips",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0027",
    "rootOrg": "AmeriLife",
    "agentName": "Avery Phillips",
    "agentNpn": "4095476665",
    "agentId": "AGT-H-6665-027",
    "parentAgentNpn": null,
    "levelName": "Agency Principal",
    "levelId": 2,
    "lineOfBusiness": "Annuity",
    "affiliateId": "AFF-007",
    "affiliateName": "Northstar Senior Benefits",
    "carrier": "Humana",
    "status": "Active",
    "state": "MI",
    "effectiveDate": "2024-12-08",
    "terminationDate": null,
    "productionYtd": 119780,
    "policiesYtd": 3,
    "allAgentIdsForNpn": [
      "AGT-C-6665-159",
      "AGT-H-6665-027"
    ],
    "carriersForNpn": [
      "Cigna",
      "Humana"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Northstar Senior Benefits > Avery Phillips",
    "hierarchyPathCarrierFirst": "AmeriLife > Humana > Northstar Senior Benefits > Avery Phillips",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0017",
    "rootOrg": "AmeriLife",
    "agentName": "Sophia Taylor",
    "agentNpn": "3392080953",
    "agentId": "AGT-MOO-0953-017",
    "parentAgentNpn": null,
    "levelName": "Agency Principal",
    "levelId": 2,
    "lineOfBusiness": "Annuity",
    "affiliateId": "AFF-007",
    "affiliateName": "Northstar Senior Benefits",
    "carrier": "Mutual of Omaha",
    "status": "Pending",
    "state": "MI",
    "effectiveDate": "2022-02-19",
    "terminationDate": null,
    "productionYtd": 195636,
    "policiesYtd": 225,
    "allAgentIdsForNpn": [
      "AGT-MOO-0953-017"
    ],
    "carriersForNpn": [
      "Mutual of Omaha"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Northstar Senior Benefits > Sophia Taylor",
    "hierarchyPathCarrierFirst": "AmeriLife > Mutual of Omaha > Northstar Senior Benefits > Sophia Taylor",
    "lineageHealth": "Pending"
  },
  {
    "rowId": "HR-0197",
    "rootOrg": "AmeriLife",
    "agentName": "Daniel Hall",
    "agentNpn": "2939118223",
    "agentId": "AGT-A-8223-197",
    "parentAgentNpn": "7110082321",
    "levelName": "Regional Manager",
    "levelId": 3,
    "lineOfBusiness": "Medicare Supplement",
    "affiliateId": "AFF-007",
    "affiliateName": "Northstar Senior Benefits",
    "carrier": "Ameritas",
    "status": "Active",
    "state": "FL",
    "effectiveDate": "2025-10-20",
    "terminationDate": null,
    "productionYtd": 217331,
    "policiesYtd": 199,
    "allAgentIdsForNpn": [
      "AGT-A-8223-197",
      "AGT-H-8223-037"
    ],
    "carriersForNpn": [
      "Ameritas",
      "Humana"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Northstar Senior Benefits > Alex Campbell > Daniel Hall",
    "hierarchyPathCarrierFirst": "AmeriLife > Ameritas > Northstar Senior Benefits > Daniel Hall",
    "lineageHealth": "High Performing"
  },
  {
    "rowId": "HR-0037",
    "rootOrg": "AmeriLife",
    "agentName": "Daniel Hall",
    "agentNpn": "2939118223",
    "agentId": "AGT-H-8223-037",
    "parentAgentNpn": "7110082321",
    "levelName": "Regional Manager",
    "levelId": 3,
    "lineOfBusiness": "ACA",
    "affiliateId": "AFF-007",
    "affiliateName": "Northstar Senior Benefits",
    "carrier": "Humana",
    "status": "Pending",
    "state": "FL",
    "effectiveDate": "2024-04-15",
    "terminationDate": null,
    "productionYtd": 63132,
    "policiesYtd": 127,
    "allAgentIdsForNpn": [
      "AGT-A-8223-197",
      "AGT-H-8223-037"
    ],
    "carriersForNpn": [
      "Ameritas",
      "Humana"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Northstar Senior Benefits > Alex Campbell > Daniel Hall",
    "hierarchyPathCarrierFirst": "AmeriLife > Humana > Northstar Senior Benefits > Daniel Hall",
    "lineageHealth": "Pending"
  },
  {
    "rowId": "HR-0171",
    "rootOrg": "AmeriLife",
    "agentName": "Harper Nelson",
    "agentNpn": "3553440342",
    "agentId": "AGT-DH-0342-171",
    "parentAgentNpn": "7110082321",
    "levelName": "Regional Manager",
    "levelId": 3,
    "lineOfBusiness": "PDP",
    "affiliateId": "AFF-007",
    "affiliateName": "Northstar Senior Benefits",
    "carrier": "Devoted Health",
    "status": "Active",
    "state": "AZ",
    "effectiveDate": "2024-12-06",
    "terminationDate": null,
    "productionYtd": 48973,
    "policiesYtd": 127,
    "allAgentIdsForNpn": [
      "AGT-DH-0342-171",
      "AGT-W-0342-057"
    ],
    "carriersForNpn": [
      "Devoted Health",
      "Wellcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Northstar Senior Benefits > Alex Campbell > Harper Nelson",
    "hierarchyPathCarrierFirst": "AmeriLife > Devoted Health > Northstar Senior Benefits > Harper Nelson",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0057",
    "rootOrg": "AmeriLife",
    "agentName": "Harper Nelson",
    "agentNpn": "3553440342",
    "agentId": "AGT-W-0342-057",
    "parentAgentNpn": "7110082321",
    "levelName": "Regional Manager",
    "levelId": 3,
    "lineOfBusiness": "PDP",
    "affiliateId": "AFF-007",
    "affiliateName": "Northstar Senior Benefits",
    "carrier": "Wellcare",
    "status": "Terminated",
    "state": "AZ",
    "effectiveDate": "2024-04-09",
    "terminationDate": "2027-05-26",
    "productionYtd": 28402,
    "policiesYtd": 172,
    "allAgentIdsForNpn": [
      "AGT-DH-0342-171",
      "AGT-W-0342-057"
    ],
    "carriersForNpn": [
      "Devoted Health",
      "Wellcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Northstar Senior Benefits > Alex Campbell > Harper Nelson",
    "hierarchyPathCarrierFirst": "AmeriLife > Wellcare > Northstar Senior Benefits > Harper Nelson",
    "lineageHealth": "At Risk"
  },
  {
    "rowId": "HR-0047",
    "rootOrg": "AmeriLife",
    "agentName": "Mia Hall",
    "agentNpn": "5897045684",
    "agentId": "AGT-A-5684-047",
    "parentAgentNpn": "3392080953",
    "levelName": "Regional Manager",
    "levelId": 3,
    "lineOfBusiness": "ACA",
    "affiliateId": "AFF-007",
    "affiliateName": "Northstar Senior Benefits",
    "carrier": "Allstate",
    "status": "Active",
    "state": "PA",
    "effectiveDate": "2023-12-14",
    "terminationDate": null,
    "productionYtd": 49841,
    "policiesYtd": 158,
    "allAgentIdsForNpn": [
      "AGT-A-5684-047"
    ],
    "carriersForNpn": [
      "Allstate"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Northstar Senior Benefits > Sophia Taylor > Mia Hall",
    "hierarchyPathCarrierFirst": "AmeriLife > Allstate > Northstar Senior Benefits > Mia Hall",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0067",
    "rootOrg": "AmeriLife",
    "agentName": "Ava King",
    "agentNpn": "1218179599",
    "agentId": "AGT-A-9599-067",
    "parentAgentNpn": "5897045684",
    "levelName": "District Manager",
    "levelId": 4,
    "lineOfBusiness": "PDP",
    "affiliateId": "AFF-007",
    "affiliateName": "Northstar Senior Benefits",
    "carrier": "Anthem",
    "status": "Active",
    "state": "MI",
    "effectiveDate": "2020-09-05",
    "terminationDate": null,
    "productionYtd": 49757,
    "policiesYtd": 31,
    "allAgentIdsForNpn": [
      "AGT-A-9599-067"
    ],
    "carriersForNpn": [
      "Anthem"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Northstar Senior Benefits > Sophia Taylor > Mia Hall > Ava King",
    "hierarchyPathCarrierFirst": "AmeriLife > Anthem > Northstar Senior Benefits > Ava King",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0087",
    "rootOrg": "AmeriLife",
    "agentName": "Jessica Lewis",
    "agentNpn": "8289454630",
    "agentId": "AGT-MOO-4630-087",
    "parentAgentNpn": "4095476665",
    "levelName": "District Manager",
    "levelId": 4,
    "lineOfBusiness": "Life",
    "affiliateId": "AFF-007",
    "affiliateName": "Northstar Senior Benefits",
    "carrier": "Mutual of Omaha",
    "status": "Active",
    "state": "NC",
    "effectiveDate": "2021-01-24",
    "terminationDate": null,
    "productionYtd": 81926,
    "policiesYtd": 170,
    "allAgentIdsForNpn": [
      "AGT-MOO-4630-087"
    ],
    "carriersForNpn": [
      "Mutual of Omaha"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Northstar Senior Benefits > Avery Phillips > Jessica Lewis",
    "hierarchyPathCarrierFirst": "AmeriLife > Mutual of Omaha > Northstar Senior Benefits > Jessica Lewis",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0077",
    "rootOrg": "AmeriLife",
    "agentName": "Rowan Miller",
    "agentNpn": "9691572571",
    "agentId": "AGT-DH-2571-077",
    "parentAgentNpn": "5897045684",
    "levelName": "District Manager",
    "levelId": 4,
    "lineOfBusiness": "Annuity",
    "affiliateId": "AFF-007",
    "affiliateName": "Northstar Senior Benefits",
    "carrier": "Devoted Health",
    "status": "Active",
    "state": "FL",
    "effectiveDate": "2025-01-10",
    "terminationDate": null,
    "productionYtd": 155625,
    "policiesYtd": 27,
    "allAgentIdsForNpn": [
      "AGT-DH-2571-077"
    ],
    "carriersForNpn": [
      "Devoted Health"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Northstar Senior Benefits > Sophia Taylor > Mia Hall > Rowan Miller",
    "hierarchyPathCarrierFirst": "AmeriLife > Devoted Health > Northstar Senior Benefits > Rowan Miller",
    "lineageHealth": "High Performing"
  },
  {
    "rowId": "HR-0117",
    "rootOrg": "AmeriLife",
    "agentName": "Elijah Carter",
    "agentNpn": "4085320828",
    "agentId": "AGT-H-0828-117",
    "parentAgentNpn": "3553440342",
    "levelName": "Agent",
    "levelId": 5,
    "lineOfBusiness": "ACA",
    "affiliateId": "AFF-007",
    "affiliateName": "Northstar Senior Benefits",
    "carrier": "Humana",
    "status": "Active",
    "state": "VA",
    "effectiveDate": "2024-06-09",
    "terminationDate": null,
    "productionYtd": 89001,
    "policiesYtd": 56,
    "allAgentIdsForNpn": [
      "AGT-H-0828-117"
    ],
    "carriersForNpn": [
      "Humana"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Northstar Senior Benefits > Alex Campbell > Harper Nelson > Elijah Carter",
    "hierarchyPathCarrierFirst": "AmeriLife > Humana > Northstar Senior Benefits > Elijah Carter",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0179",
    "rootOrg": "AmeriLife",
    "agentName": "Elijah Edwards",
    "agentNpn": "9251459094",
    "agentId": "AGT-C-9094-179",
    "parentAgentNpn": "1218179599",
    "levelName": "Agent",
    "levelId": 5,
    "lineOfBusiness": "Dental/Vision",
    "affiliateId": "AFF-007",
    "affiliateName": "Northstar Senior Benefits",
    "carrier": "Cigna",
    "status": "Active",
    "state": "GA",
    "effectiveDate": "2020-05-07",
    "terminationDate": null,
    "productionYtd": 159271,
    "policiesYtd": 173,
    "allAgentIdsForNpn": [
      "AGT-C-9094-179",
      "AGT-U-9094-147"
    ],
    "carriersForNpn": [
      "Cigna",
      "UnitedHealthcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Northstar Senior Benefits > Sophia Taylor > Mia Hall > Ava King > Elijah Edwards",
    "hierarchyPathCarrierFirst": "AmeriLife > Cigna > Northstar Senior Benefits > Elijah Edwards",
    "lineageHealth": "High Performing"
  },
  {
    "rowId": "HR-0147",
    "rootOrg": "AmeriLife",
    "agentName": "Elijah Edwards",
    "agentNpn": "9251459094",
    "agentId": "AGT-U-9094-147",
    "parentAgentNpn": "1218179599",
    "levelName": "Agent",
    "levelId": 5,
    "lineOfBusiness": "PDP",
    "affiliateId": "AFF-007",
    "affiliateName": "Northstar Senior Benefits",
    "carrier": "UnitedHealthcare",
    "status": "Pending",
    "state": "GA",
    "effectiveDate": "2024-12-24",
    "terminationDate": null,
    "productionYtd": 197234,
    "policiesYtd": 191,
    "allAgentIdsForNpn": [
      "AGT-C-9094-179",
      "AGT-U-9094-147"
    ],
    "carriersForNpn": [
      "Cigna",
      "UnitedHealthcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Northstar Senior Benefits > Sophia Taylor > Mia Hall > Ava King > Elijah Edwards",
    "hierarchyPathCarrierFirst": "AmeriLife > UnitedHealthcare > Northstar Senior Benefits > Elijah Edwards",
    "lineageHealth": "Pending"
  },
  {
    "rowId": "HR-0097",
    "rootOrg": "AmeriLife",
    "agentName": "Benjamin Wilson",
    "agentNpn": "5816198518",
    "agentId": "AGT-W-8518-097",
    "parentAgentNpn": "8289454630",
    "levelName": "Writing Agent",
    "levelId": 6,
    "lineOfBusiness": "PDP",
    "affiliateId": "AFF-007",
    "affiliateName": "Northstar Senior Benefits",
    "carrier": "Wellcare",
    "status": "Active",
    "state": "PA",
    "effectiveDate": "2020-04-28",
    "terminationDate": null,
    "productionYtd": 184208,
    "policiesYtd": 195,
    "allAgentIdsForNpn": [
      "AGT-W-8518-097"
    ],
    "carriersForNpn": [
      "Wellcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Northstar Senior Benefits > Avery Phillips > Jessica Lewis > Benjamin Wilson",
    "hierarchyPathCarrierFirst": "AmeriLife > Wellcare > Northstar Senior Benefits > Benjamin Wilson",
    "lineageHealth": "High Performing"
  },
  {
    "rowId": "HR-0137",
    "rootOrg": "AmeriLife",
    "agentName": "Isabella Garcia",
    "agentNpn": "4530959836",
    "agentId": "AGT-C-9836-137",
    "parentAgentNpn": "2939118223",
    "levelName": "Writing Agent",
    "levelId": 6,
    "lineOfBusiness": "ACA",
    "affiliateId": "AFF-007",
    "affiliateName": "Northstar Senior Benefits",
    "carrier": "Cigna",
    "status": "Active",
    "state": "OH",
    "effectiveDate": "2023-12-03",
    "terminationDate": null,
    "productionYtd": 183102,
    "policiesYtd": 169,
    "allAgentIdsForNpn": [
      "AGT-C-9836-137"
    ],
    "carriersForNpn": [
      "Cigna"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Northstar Senior Benefits > Alex Campbell > Daniel Hall > Isabella Garcia",
    "hierarchyPathCarrierFirst": "AmeriLife > Cigna > Northstar Senior Benefits > Isabella Garcia",
    "lineageHealth": "High Performing"
  },
  {
    "rowId": "HR-0107",
    "rootOrg": "AmeriLife",
    "agentName": "Rowan Taylor",
    "agentNpn": "7166868574",
    "agentId": "AGT-U-8574-107",
    "parentAgentNpn": "3553440342",
    "levelName": "Writing Agent",
    "levelId": 6,
    "lineOfBusiness": "Medicare Advantage",
    "affiliateId": "AFF-007",
    "affiliateName": "Northstar Senior Benefits",
    "carrier": "UnitedHealthcare",
    "status": "Pending",
    "state": "NJ",
    "effectiveDate": "2024-06-06",
    "terminationDate": null,
    "productionYtd": 2015,
    "policiesYtd": 52,
    "allAgentIdsForNpn": [
      "AGT-U-8574-107"
    ],
    "carriersForNpn": [
      "UnitedHealthcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Northstar Senior Benefits > Alex Campbell > Harper Nelson > Rowan Taylor",
    "hierarchyPathCarrierFirst": "AmeriLife > UnitedHealthcare > Northstar Senior Benefits > Rowan Taylor",
    "lineageHealth": "At Risk"
  },
  {
    "rowId": "HR-0127",
    "rootOrg": "AmeriLife",
    "agentName": "Zoe Lee",
    "agentNpn": "4256292393",
    "agentId": "AGT-H-2393-127",
    "parentAgentNpn": "8289454630",
    "levelName": "Writing Agent",
    "levelId": 6,
    "lineOfBusiness": "Annuity",
    "affiliateId": "AFF-007",
    "affiliateName": "Northstar Senior Benefits",
    "carrier": "Humana",
    "status": "Pending",
    "state": "IL",
    "effectiveDate": "2021-01-04",
    "terminationDate": null,
    "productionYtd": 132924,
    "policiesYtd": 98,
    "allAgentIdsForNpn": [
      "AGT-H-2393-127"
    ],
    "carriersForNpn": [
      "Humana"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Northstar Senior Benefits > Avery Phillips > Jessica Lewis > Zoe Lee",
    "hierarchyPathCarrierFirst": "AmeriLife > Humana > Northstar Senior Benefits > Zoe Lee",
    "lineageHealth": "Pending"
  },
  {
    "rowId": "HR-0001",
    "rootOrg": "AmeriLife",
    "agentName": "Nora Garcia",
    "agentNpn": "9697354961",
    "agentId": "AGT-A-4961-001",
    "parentAgentNpn": null,
    "levelName": "IMO / Top Agency",
    "levelId": 1,
    "lineOfBusiness": "Annuity",
    "affiliateId": "AFF-001",
    "affiliateName": "Pinnacle Senior Solutions",
    "carrier": "Aetna",
    "status": "Active",
    "state": "TX",
    "effectiveDate": "2021-12-18",
    "terminationDate": null,
    "productionYtd": 170789,
    "policiesYtd": 113,
    "allAgentIdsForNpn": [
      "AGT-A-4961-001"
    ],
    "carriersForNpn": [
      "Aetna"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Pinnacle Senior Solutions > Nora Garcia",
    "hierarchyPathCarrierFirst": "AmeriLife > Aetna > Pinnacle Senior Solutions > Nora Garcia",
    "lineageHealth": "High Performing"
  },
  {
    "rowId": "HR-0183",
    "rootOrg": "AmeriLife",
    "agentName": "Emerson Perez",
    "agentNpn": "8995970241",
    "agentId": "AGT-H-0241-183",
    "parentAgentNpn": null,
    "levelName": "Agency Principal",
    "levelId": 2,
    "lineOfBusiness": "PDP",
    "affiliateId": "AFF-001",
    "affiliateName": "Pinnacle Senior Solutions",
    "carrier": "Humana",
    "status": "Pending",
    "state": "AZ",
    "effectiveDate": "2021-07-17",
    "terminationDate": null,
    "productionYtd": 104342,
    "policiesYtd": 80,
    "allAgentIdsForNpn": [
      "AGT-H-0241-183",
      "AGT-W-0241-011"
    ],
    "carriersForNpn": [
      "Humana",
      "Wellcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Pinnacle Senior Solutions > Emerson Perez",
    "hierarchyPathCarrierFirst": "AmeriLife > Humana > Pinnacle Senior Solutions > Emerson Perez",
    "lineageHealth": "Pending"
  },
  {
    "rowId": "HR-0011",
    "rootOrg": "AmeriLife",
    "agentName": "Emerson Perez",
    "agentNpn": "8995970241",
    "agentId": "AGT-W-0241-011",
    "parentAgentNpn": null,
    "levelName": "Agency Principal",
    "levelId": 2,
    "lineOfBusiness": "Medicare Advantage",
    "affiliateId": "AFF-001",
    "affiliateName": "Pinnacle Senior Solutions",
    "carrier": "Wellcare",
    "status": "Terminated",
    "state": "AZ",
    "effectiveDate": "2024-11-29",
    "terminationDate": "2026-10-06",
    "productionYtd": 7567,
    "policiesYtd": 161,
    "allAgentIdsForNpn": [
      "AGT-H-0241-183",
      "AGT-W-0241-011"
    ],
    "carriersForNpn": [
      "Humana",
      "Wellcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Pinnacle Senior Solutions > Emerson Perez",
    "hierarchyPathCarrierFirst": "AmeriLife > Wellcare > Pinnacle Senior Solutions > Emerson Perez",
    "lineageHealth": "At Risk"
  },
  {
    "rowId": "HR-0021",
    "rootOrg": "AmeriLife",
    "agentName": "Mason Lewis",
    "agentNpn": "8055995058",
    "agentId": "AGT-C-5058-021",
    "parentAgentNpn": null,
    "levelName": "Agency Principal",
    "levelId": 2,
    "lineOfBusiness": "Life",
    "affiliateId": "AFF-001",
    "affiliateName": "Pinnacle Senior Solutions",
    "carrier": "Cigna",
    "status": "Pending",
    "state": "PA",
    "effectiveDate": "2025-01-03",
    "terminationDate": null,
    "productionYtd": 90472,
    "policiesYtd": 85,
    "allAgentIdsForNpn": [
      "AGT-C-5058-021"
    ],
    "carriersForNpn": [
      "Cigna"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Pinnacle Senior Solutions > Mason Lewis",
    "hierarchyPathCarrierFirst": "AmeriLife > Cigna > Pinnacle Senior Solutions > Mason Lewis",
    "lineageHealth": "Pending"
  },
  {
    "rowId": "HR-0051",
    "rootOrg": "AmeriLife",
    "agentName": "Alex Clark",
    "agentNpn": "6971815972",
    "agentId": "AGT-C-5972-051",
    "parentAgentNpn": "8995970241",
    "levelName": "Regional Manager",
    "levelId": 3,
    "lineOfBusiness": "Dental/Vision",
    "affiliateId": "AFF-001",
    "affiliateName": "Pinnacle Senior Solutions",
    "carrier": "Cigna",
    "status": "Active",
    "state": "TN",
    "effectiveDate": "2022-04-02",
    "terminationDate": null,
    "productionYtd": 141402,
    "policiesYtd": 224,
    "allAgentIdsForNpn": [
      "AGT-C-5972-051",
      "AGT-H-5972-178"
    ],
    "carriersForNpn": [
      "Cigna",
      "Humana"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Pinnacle Senior Solutions > Emerson Perez > Alex Clark",
    "hierarchyPathCarrierFirst": "AmeriLife > Cigna > Pinnacle Senior Solutions > Alex Clark",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0178",
    "rootOrg": "AmeriLife",
    "agentName": "Alex Clark",
    "agentNpn": "6971815972",
    "agentId": "AGT-H-5972-178",
    "parentAgentNpn": "8995970241",
    "levelName": "Regional Manager",
    "levelId": 3,
    "lineOfBusiness": "Annuity",
    "affiliateId": "AFF-001",
    "affiliateName": "Pinnacle Senior Solutions",
    "carrier": "Humana",
    "status": "Active",
    "state": "TN",
    "effectiveDate": "2024-07-21",
    "terminationDate": null,
    "productionYtd": 210002,
    "policiesYtd": 191,
    "allAgentIdsForNpn": [
      "AGT-C-5972-051",
      "AGT-H-5972-178"
    ],
    "carriersForNpn": [
      "Cigna",
      "Humana"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Pinnacle Senior Solutions > Emerson Perez > Alex Clark",
    "hierarchyPathCarrierFirst": "AmeriLife > Humana > Pinnacle Senior Solutions > Alex Clark",
    "lineageHealth": "High Performing"
  },
  {
    "rowId": "HR-0041",
    "rootOrg": "AmeriLife",
    "agentName": "Logan Turner",
    "agentNpn": "3084839399",
    "agentId": "AGT-A-9399-041",
    "parentAgentNpn": "9697354961",
    "levelName": "Regional Manager",
    "levelId": 3,
    "lineOfBusiness": "Life",
    "affiliateId": "AFF-001",
    "affiliateName": "Pinnacle Senior Solutions",
    "carrier": "Allstate",
    "status": "Terminated",
    "state": "NC",
    "effectiveDate": "2023-05-10",
    "terminationDate": "2026-07-18",
    "productionYtd": 180961,
    "policiesYtd": 64,
    "allAgentIdsForNpn": [
      "AGT-A-9399-041",
      "AGT-DH-9399-187"
    ],
    "carriersForNpn": [
      "Allstate",
      "Devoted Health"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Pinnacle Senior Solutions > Nora Garcia > Logan Turner",
    "hierarchyPathCarrierFirst": "AmeriLife > Allstate > Pinnacle Senior Solutions > Logan Turner",
    "lineageHealth": "At Risk"
  },
  {
    "rowId": "HR-0187",
    "rootOrg": "AmeriLife",
    "agentName": "Logan Turner",
    "agentNpn": "3084839399",
    "agentId": "AGT-DH-9399-187",
    "parentAgentNpn": "9697354961",
    "levelName": "Regional Manager",
    "levelId": 3,
    "lineOfBusiness": "Medicare Supplement",
    "affiliateId": "AFF-001",
    "affiliateName": "Pinnacle Senior Solutions",
    "carrier": "Devoted Health",
    "status": "Active",
    "state": "NC",
    "effectiveDate": "2022-03-30",
    "terminationDate": null,
    "productionYtd": 223563,
    "policiesYtd": 18,
    "allAgentIdsForNpn": [
      "AGT-A-9399-041",
      "AGT-DH-9399-187"
    ],
    "carriersForNpn": [
      "Allstate",
      "Devoted Health"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Pinnacle Senior Solutions > Nora Garcia > Logan Turner",
    "hierarchyPathCarrierFirst": "AmeriLife > Devoted Health > Pinnacle Senior Solutions > Logan Turner",
    "lineageHealth": "High Performing"
  },
  {
    "rowId": "HR-0181",
    "rootOrg": "AmeriLife",
    "agentName": "Nora Thomas",
    "agentNpn": "1854316681",
    "agentId": "AGT-A-6681-181",
    "parentAgentNpn": "9697354961",
    "levelName": "Regional Manager",
    "levelId": 3,
    "lineOfBusiness": "Annuity",
    "affiliateId": "AFF-001",
    "affiliateName": "Pinnacle Senior Solutions",
    "carrier": "Anthem",
    "status": "Active",
    "state": "CA",
    "effectiveDate": "2024-01-23",
    "terminationDate": null,
    "productionYtd": 8489,
    "policiesYtd": 154,
    "allAgentIdsForNpn": [
      "AGT-A-6681-181",
      "AGT-DH-6681-031"
    ],
    "carriersForNpn": [
      "Anthem",
      "Devoted Health"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Pinnacle Senior Solutions > Nora Garcia > Nora Thomas",
    "hierarchyPathCarrierFirst": "AmeriLife > Anthem > Pinnacle Senior Solutions > Nora Thomas",
    "lineageHealth": "At Risk"
  },
  {
    "rowId": "HR-0031",
    "rootOrg": "AmeriLife",
    "agentName": "Nora Thomas",
    "agentNpn": "1854316681",
    "agentId": "AGT-DH-6681-031",
    "parentAgentNpn": "9697354961",
    "levelName": "Regional Manager",
    "levelId": 3,
    "lineOfBusiness": "Annuity",
    "affiliateId": "AFF-001",
    "affiliateName": "Pinnacle Senior Solutions",
    "carrier": "Devoted Health",
    "status": "Active",
    "state": "CA",
    "effectiveDate": "2026-01-25",
    "terminationDate": null,
    "productionYtd": 17936,
    "policiesYtd": 60,
    "allAgentIdsForNpn": [
      "AGT-A-6681-181",
      "AGT-DH-6681-031"
    ],
    "carriersForNpn": [
      "Anthem",
      "Devoted Health"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Pinnacle Senior Solutions > Nora Garcia > Nora Thomas",
    "hierarchyPathCarrierFirst": "AmeriLife > Devoted Health > Pinnacle Senior Solutions > Nora Thomas",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0198",
    "rootOrg": "AmeriLife",
    "agentName": "Avery Allen",
    "agentNpn": "1429416213",
    "agentId": "AGT-A-6213-198",
    "parentAgentNpn": "8055995058",
    "levelName": "District Manager",
    "levelId": 4,
    "lineOfBusiness": "Life",
    "affiliateId": "AFF-001",
    "affiliateName": "Pinnacle Senior Solutions",
    "carrier": "Allstate",
    "status": "Active",
    "state": "NC",
    "effectiveDate": "2022-01-15",
    "terminationDate": null,
    "productionYtd": 131822,
    "policiesYtd": 233,
    "allAgentIdsForNpn": [
      "AGT-A-6213-198",
      "AGT-W-6213-061"
    ],
    "carriersForNpn": [
      "Allstate",
      "Wellcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Pinnacle Senior Solutions > Mason Lewis > Avery Allen",
    "hierarchyPathCarrierFirst": "AmeriLife > Allstate > Pinnacle Senior Solutions > Avery Allen",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0061",
    "rootOrg": "AmeriLife",
    "agentName": "Avery Allen",
    "agentNpn": "1429416213",
    "agentId": "AGT-W-6213-061",
    "parentAgentNpn": "8055995058",
    "levelName": "District Manager",
    "levelId": 4,
    "lineOfBusiness": "Medicare Advantage",
    "affiliateId": "AFF-001",
    "affiliateName": "Pinnacle Senior Solutions",
    "carrier": "Wellcare",
    "status": "Active",
    "state": "NC",
    "effectiveDate": "2025-07-10",
    "terminationDate": null,
    "productionYtd": 61551,
    "policiesYtd": 227,
    "allAgentIdsForNpn": [
      "AGT-A-6213-198",
      "AGT-W-6213-061"
    ],
    "carriersForNpn": [
      "Allstate",
      "Wellcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Pinnacle Senior Solutions > Mason Lewis > Avery Allen",
    "hierarchyPathCarrierFirst": "AmeriLife > Wellcare > Pinnacle Senior Solutions > Avery Allen",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0081",
    "rootOrg": "AmeriLife",
    "agentName": "Kendall Patel",
    "agentNpn": "7161404428",
    "agentId": "AGT-DH-4428-081",
    "parentAgentNpn": "1854316681",
    "levelName": "District Manager",
    "levelId": 4,
    "lineOfBusiness": "PDP",
    "affiliateId": "AFF-001",
    "affiliateName": "Pinnacle Senior Solutions",
    "carrier": "Devoted Health",
    "status": "Active",
    "state": "IL",
    "effectiveDate": "2020-10-28",
    "terminationDate": null,
    "productionYtd": 159461,
    "policiesYtd": 37,
    "allAgentIdsForNpn": [
      "AGT-DH-4428-081"
    ],
    "carriersForNpn": [
      "Devoted Health"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Pinnacle Senior Solutions > Nora Garcia > Nora Thomas > Kendall Patel",
    "hierarchyPathCarrierFirst": "AmeriLife > Devoted Health > Pinnacle Senior Solutions > Kendall Patel",
    "lineageHealth": "High Performing"
  },
  {
    "rowId": "HR-0071",
    "rootOrg": "AmeriLife",
    "agentName": "Taylor Thomas",
    "agentNpn": "2536778950",
    "agentId": "AGT-U-8950-071",
    "parentAgentNpn": "8055995058",
    "levelName": "District Manager",
    "levelId": 4,
    "lineOfBusiness": "PDP",
    "affiliateId": "AFF-001",
    "affiliateName": "Pinnacle Senior Solutions",
    "carrier": "UnitedHealthcare",
    "status": "Active",
    "state": "MI",
    "effectiveDate": "2022-06-03",
    "terminationDate": null,
    "productionYtd": 202996,
    "policiesYtd": 37,
    "allAgentIdsForNpn": [
      "AGT-U-8950-071"
    ],
    "carriersForNpn": [
      "UnitedHealthcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Pinnacle Senior Solutions > Mason Lewis > Taylor Thomas",
    "hierarchyPathCarrierFirst": "AmeriLife > UnitedHealthcare > Pinnacle Senior Solutions > Taylor Thomas",
    "lineageHealth": "High Performing"
  },
  {
    "rowId": "HR-0141",
    "rootOrg": "AmeriLife",
    "agentName": "Charlotte Mitchell",
    "agentNpn": "9848621776",
    "agentId": "AGT-A-1776-141",
    "parentAgentNpn": "1429416213",
    "levelName": "Agent",
    "levelId": 5,
    "lineOfBusiness": "Medicare Supplement",
    "affiliateId": "AFF-001",
    "affiliateName": "Pinnacle Senior Solutions",
    "carrier": "Aetna",
    "status": "Active",
    "state": "IL",
    "effectiveDate": "2024-01-25",
    "terminationDate": null,
    "productionYtd": 56149,
    "policiesYtd": 87,
    "allAgentIdsForNpn": [
      "AGT-A-1776-141"
    ],
    "carriersForNpn": [
      "Aetna"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Pinnacle Senior Solutions > Mason Lewis > Avery Allen > Charlotte Mitchell",
    "hierarchyPathCarrierFirst": "AmeriLife > Aetna > Pinnacle Senior Solutions > Charlotte Mitchell",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0131",
    "rootOrg": "AmeriLife",
    "agentName": "Finley Moore",
    "agentNpn": "1990153355",
    "agentId": "AGT-A-3355-131",
    "parentAgentNpn": "6971815972",
    "levelName": "Agent",
    "levelId": 5,
    "lineOfBusiness": "ACA",
    "affiliateId": "AFF-001",
    "affiliateName": "Pinnacle Senior Solutions",
    "carrier": "Anthem",
    "status": "Pending",
    "state": "IL",
    "effectiveDate": "2020-12-11",
    "terminationDate": null,
    "productionYtd": 45235,
    "policiesYtd": 10,
    "allAgentIdsForNpn": [
      "AGT-A-3355-131"
    ],
    "carriersForNpn": [
      "Anthem"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Pinnacle Senior Solutions > Emerson Perez > Alex Clark > Finley Moore",
    "hierarchyPathCarrierFirst": "AmeriLife > Anthem > Pinnacle Senior Solutions > Finley Moore",
    "lineageHealth": "Pending"
  },
  {
    "rowId": "HR-0091",
    "rootOrg": "AmeriLife",
    "agentName": "Mateo Davis",
    "agentNpn": "7490442894",
    "agentId": "AGT-A-2894-091",
    "parentAgentNpn": "7161404428",
    "levelName": "Agent",
    "levelId": 5,
    "lineOfBusiness": "Life",
    "affiliateId": "AFF-001",
    "affiliateName": "Pinnacle Senior Solutions",
    "carrier": "Ameritas",
    "status": "Terminated",
    "state": "VA",
    "effectiveDate": "2023-09-12",
    "terminationDate": "2024-07-13",
    "productionYtd": 92693,
    "policiesYtd": 223,
    "allAgentIdsForNpn": [
      "AGT-A-2894-091"
    ],
    "carriersForNpn": [
      "Ameritas"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Pinnacle Senior Solutions > Nora Garcia > Nora Thomas > Kendall Patel > Mateo Davis",
    "hierarchyPathCarrierFirst": "AmeriLife > Ameritas > Pinnacle Senior Solutions > Mateo Davis",
    "lineageHealth": "At Risk"
  },
  {
    "rowId": "HR-0184",
    "rootOrg": "AmeriLife",
    "agentName": "Daniel Rodriguez",
    "agentNpn": "2465576748",
    "agentId": "AGT-A-6748-184",
    "parentAgentNpn": "7490442894",
    "levelName": "Writing Agent",
    "levelId": 6,
    "lineOfBusiness": "Medicare Advantage",
    "affiliateId": "AFF-001",
    "affiliateName": "Pinnacle Senior Solutions",
    "carrier": "Anthem",
    "status": "Active",
    "state": "MA",
    "effectiveDate": "2022-10-19",
    "terminationDate": null,
    "productionYtd": 192852,
    "policiesYtd": 47,
    "allAgentIdsForNpn": [
      "AGT-A-6748-184",
      "AGT-C-6748-121"
    ],
    "carriersForNpn": [
      "Anthem",
      "Cigna"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Pinnacle Senior Solutions > Nora Garcia > Nora Thomas > Kendall Patel > Mateo Davis > Daniel Rodriguez",
    "hierarchyPathCarrierFirst": "AmeriLife > Anthem > Pinnacle Senior Solutions > Daniel Rodriguez",
    "lineageHealth": "High Performing"
  },
  {
    "rowId": "HR-0121",
    "rootOrg": "AmeriLife",
    "agentName": "Daniel Rodriguez",
    "agentNpn": "2465576748",
    "agentId": "AGT-C-6748-121",
    "parentAgentNpn": "7490442894",
    "levelName": "Writing Agent",
    "levelId": 6,
    "lineOfBusiness": "Medicare Supplement",
    "affiliateId": "AFF-001",
    "affiliateName": "Pinnacle Senior Solutions",
    "carrier": "Cigna",
    "status": "Terminated",
    "state": "MA",
    "effectiveDate": "2021-09-18",
    "terminationDate": "2022-06-02",
    "productionYtd": 202597,
    "policiesYtd": 160,
    "allAgentIdsForNpn": [
      "AGT-A-6748-184",
      "AGT-C-6748-121"
    ],
    "carriersForNpn": [
      "Anthem",
      "Cigna"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Pinnacle Senior Solutions > Nora Garcia > Nora Thomas > Kendall Patel > Mateo Davis > Daniel Rodriguez",
    "hierarchyPathCarrierFirst": "AmeriLife > Cigna > Pinnacle Senior Solutions > Daniel Rodriguez",
    "lineageHealth": "At Risk"
  },
  {
    "rowId": "HR-0111",
    "rootOrg": "AmeriLife",
    "agentName": "Ethan Williams",
    "agentNpn": "5510938155",
    "agentId": "AGT-A-8155-111",
    "parentAgentNpn": "3084839399",
    "levelName": "Writing Agent",
    "levelId": 6,
    "lineOfBusiness": "PDP",
    "affiliateId": "AFF-001",
    "affiliateName": "Pinnacle Senior Solutions",
    "carrier": "Ameritas",
    "status": "Terminated",
    "state": "OH",
    "effectiveDate": "2026-04-07",
    "terminationDate": "2029-01-06",
    "productionYtd": 18894,
    "policiesYtd": 101,
    "allAgentIdsForNpn": [
      "AGT-A-8155-111"
    ],
    "carriersForNpn": [
      "Ameritas"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Pinnacle Senior Solutions > Nora Garcia > Logan Turner > Ethan Williams",
    "hierarchyPathCarrierFirst": "AmeriLife > Ameritas > Pinnacle Senior Solutions > Ethan Williams",
    "lineageHealth": "At Risk"
  },
  {
    "rowId": "HR-0101",
    "rootOrg": "AmeriLife",
    "agentName": "Olivia Rodriguez",
    "agentNpn": "8359619163",
    "agentId": "AGT-DH-9163-101",
    "parentAgentNpn": "6971815972",
    "levelName": "Writing Agent",
    "levelId": 6,
    "lineOfBusiness": "PDP",
    "affiliateId": "AFF-001",
    "affiliateName": "Pinnacle Senior Solutions",
    "carrier": "Devoted Health",
    "status": "Active",
    "state": "FL",
    "effectiveDate": "2023-10-28",
    "terminationDate": null,
    "productionYtd": 81693,
    "policiesYtd": 184,
    "allAgentIdsForNpn": [
      "AGT-DH-9163-101"
    ],
    "carriersForNpn": [
      "Devoted Health"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Pinnacle Senior Solutions > Emerson Perez > Alex Clark > Olivia Rodriguez",
    "hierarchyPathCarrierFirst": "AmeriLife > Devoted Health > Pinnacle Senior Solutions > Olivia Rodriguez",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0004",
    "rootOrg": "AmeriLife",
    "agentName": "Rowan Wright",
    "agentNpn": "3585650756",
    "agentId": "AGT-A-0756-004",
    "parentAgentNpn": null,
    "levelName": "IMO / Top Agency",
    "levelId": 1,
    "lineOfBusiness": "PDP",
    "affiliateId": "AFF-004",
    "affiliateName": "Summit Medicare Advisors",
    "carrier": "Anthem",
    "status": "Active",
    "state": "NC",
    "effectiveDate": "2021-03-04",
    "terminationDate": null,
    "productionYtd": 107910,
    "policiesYtd": 177,
    "allAgentIdsForNpn": [
      "AGT-A-0756-004",
      "AGT-W-0756-175"
    ],
    "carriersForNpn": [
      "Anthem",
      "Wellcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Summit Medicare Advisors > Rowan Wright",
    "hierarchyPathCarrierFirst": "AmeriLife > Anthem > Summit Medicare Advisors > Rowan Wright",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0175",
    "rootOrg": "AmeriLife",
    "agentName": "Rowan Wright",
    "agentNpn": "3585650756",
    "agentId": "AGT-W-0756-175",
    "parentAgentNpn": null,
    "levelName": "IMO / Top Agency",
    "levelId": 1,
    "lineOfBusiness": "Annuity",
    "affiliateId": "AFF-004",
    "affiliateName": "Summit Medicare Advisors",
    "carrier": "Wellcare",
    "status": "Active",
    "state": "NC",
    "effectiveDate": "2023-06-09",
    "terminationDate": null,
    "productionYtd": 188131,
    "policiesYtd": 109,
    "allAgentIdsForNpn": [
      "AGT-A-0756-004",
      "AGT-W-0756-175"
    ],
    "carriersForNpn": [
      "Anthem",
      "Wellcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Summit Medicare Advisors > Rowan Wright",
    "hierarchyPathCarrierFirst": "AmeriLife > Wellcare > Summit Medicare Advisors > Rowan Wright",
    "lineageHealth": "High Performing"
  },
  {
    "rowId": "HR-0170",
    "rootOrg": "AmeriLife",
    "agentName": "Ava King",
    "agentNpn": "1470939445",
    "agentId": "AGT-A-9445-170",
    "parentAgentNpn": null,
    "levelName": "Agency Principal",
    "levelId": 2,
    "lineOfBusiness": "Dental/Vision",
    "affiliateId": "AFF-004",
    "affiliateName": "Summit Medicare Advisors",
    "carrier": "Anthem",
    "status": "Active",
    "state": "MI",
    "effectiveDate": "2023-01-24",
    "terminationDate": null,
    "productionYtd": 96474,
    "policiesYtd": 111,
    "allAgentIdsForNpn": [
      "AGT-A-9445-170",
      "AGT-MOO-9445-024"
    ],
    "carriersForNpn": [
      "Anthem",
      "Mutual of Omaha"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Summit Medicare Advisors > Ava King",
    "hierarchyPathCarrierFirst": "AmeriLife > Anthem > Summit Medicare Advisors > Ava King",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0024",
    "rootOrg": "AmeriLife",
    "agentName": "Ava King",
    "agentNpn": "1470939445",
    "agentId": "AGT-MOO-9445-024",
    "parentAgentNpn": null,
    "levelName": "Agency Principal",
    "levelId": 2,
    "lineOfBusiness": "ACA",
    "affiliateId": "AFF-004",
    "affiliateName": "Summit Medicare Advisors",
    "carrier": "Mutual of Omaha",
    "status": "Active",
    "state": "MI",
    "effectiveDate": "2020-06-27",
    "terminationDate": null,
    "productionYtd": 123987,
    "policiesYtd": 180,
    "allAgentIdsForNpn": [
      "AGT-A-9445-170",
      "AGT-MOO-9445-024"
    ],
    "carriersForNpn": [
      "Anthem",
      "Mutual of Omaha"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Summit Medicare Advisors > Ava King",
    "hierarchyPathCarrierFirst": "AmeriLife > Mutual of Omaha > Summit Medicare Advisors > Ava King",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0155",
    "rootOrg": "AmeriLife",
    "agentName": "Ethan Perez",
    "agentNpn": "8877444318",
    "agentId": "AGT-A-4318-155",
    "parentAgentNpn": null,
    "levelName": "Agency Principal",
    "levelId": 2,
    "lineOfBusiness": "Dental/Vision",
    "affiliateId": "AFF-004",
    "affiliateName": "Summit Medicare Advisors",
    "carrier": "Ameritas",
    "status": "Active",
    "state": "PA",
    "effectiveDate": "2020-09-14",
    "terminationDate": null,
    "productionYtd": 131027,
    "policiesYtd": 152,
    "allAgentIdsForNpn": [
      "AGT-A-4318-155",
      "AGT-H-4318-014"
    ],
    "carriersForNpn": [
      "Ameritas",
      "Humana"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Summit Medicare Advisors > Ethan Perez",
    "hierarchyPathCarrierFirst": "AmeriLife > Ameritas > Summit Medicare Advisors > Ethan Perez",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0014",
    "rootOrg": "AmeriLife",
    "agentName": "Ethan Perez",
    "agentNpn": "8877444318",
    "agentId": "AGT-H-4318-014",
    "parentAgentNpn": null,
    "levelName": "Agency Principal",
    "levelId": 2,
    "lineOfBusiness": "ACA",
    "affiliateId": "AFF-004",
    "affiliateName": "Summit Medicare Advisors",
    "carrier": "Humana",
    "status": "Active",
    "state": "PA",
    "effectiveDate": "2025-03-05",
    "terminationDate": null,
    "productionYtd": 218141,
    "policiesYtd": 39,
    "allAgentIdsForNpn": [
      "AGT-A-4318-155",
      "AGT-H-4318-014"
    ],
    "carriersForNpn": [
      "Ameritas",
      "Humana"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Summit Medicare Advisors > Ethan Perez",
    "hierarchyPathCarrierFirst": "AmeriLife > Humana > Summit Medicare Advisors > Ethan Perez",
    "lineageHealth": "High Performing"
  },
  {
    "rowId": "HR-0034",
    "rootOrg": "AmeriLife",
    "agentName": "Harper Adams",
    "agentNpn": "5067116918",
    "agentId": "AGT-A-6918-034",
    "parentAgentNpn": "1470939445",
    "levelName": "Regional Manager",
    "levelId": 3,
    "lineOfBusiness": "Dental/Vision",
    "affiliateId": "AFF-004",
    "affiliateName": "Summit Medicare Advisors",
    "carrier": "Aetna",
    "status": "Active",
    "state": "NY",
    "effectiveDate": "2020-07-07",
    "terminationDate": null,
    "productionYtd": 14711,
    "policiesYtd": 75,
    "allAgentIdsForNpn": [
      "AGT-A-6918-034"
    ],
    "carriersForNpn": [
      "Aetna"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Summit Medicare Advisors > Ava King > Harper Adams",
    "hierarchyPathCarrierFirst": "AmeriLife > Aetna > Summit Medicare Advisors > Harper Adams",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0054",
    "rootOrg": "AmeriLife",
    "agentName": "Morgan Thompson",
    "agentNpn": "7803990970",
    "agentId": "AGT-H-0970-054",
    "parentAgentNpn": "1470939445",
    "levelName": "Regional Manager",
    "levelId": 3,
    "lineOfBusiness": "Medicare Supplement",
    "affiliateId": "AFF-004",
    "affiliateName": "Summit Medicare Advisors",
    "carrier": "Humana",
    "status": "Active",
    "state": "NC",
    "effectiveDate": "2025-04-02",
    "terminationDate": null,
    "productionYtd": 197696,
    "policiesYtd": 57,
    "allAgentIdsForNpn": [
      "AGT-H-0970-054",
      "AGT-U-0970-176"
    ],
    "carriersForNpn": [
      "Humana",
      "UnitedHealthcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Summit Medicare Advisors > Ava King > Morgan Thompson",
    "hierarchyPathCarrierFirst": "AmeriLife > Humana > Summit Medicare Advisors > Morgan Thompson",
    "lineageHealth": "High Performing"
  },
  {
    "rowId": "HR-0176",
    "rootOrg": "AmeriLife",
    "agentName": "Morgan Thompson",
    "agentNpn": "7803990970",
    "agentId": "AGT-U-0970-176",
    "parentAgentNpn": "1470939445",
    "levelName": "Regional Manager",
    "levelId": 3,
    "lineOfBusiness": "Life",
    "affiliateId": "AFF-004",
    "affiliateName": "Summit Medicare Advisors",
    "carrier": "UnitedHealthcare",
    "status": "Active",
    "state": "NC",
    "effectiveDate": "2024-12-23",
    "terminationDate": null,
    "productionYtd": 11103,
    "policiesYtd": 186,
    "allAgentIdsForNpn": [
      "AGT-H-0970-054",
      "AGT-U-0970-176"
    ],
    "carriersForNpn": [
      "Humana",
      "UnitedHealthcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Summit Medicare Advisors > Ava King > Morgan Thompson",
    "hierarchyPathCarrierFirst": "AmeriLife > UnitedHealthcare > Summit Medicare Advisors > Morgan Thompson",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0044",
    "rootOrg": "AmeriLife",
    "agentName": "Priya Walker",
    "agentNpn": "7060638140",
    "agentId": "AGT-W-8140-044",
    "parentAgentNpn": "1470939445",
    "levelName": "Regional Manager",
    "levelId": 3,
    "lineOfBusiness": "Dental/Vision",
    "affiliateId": "AFF-004",
    "affiliateName": "Summit Medicare Advisors",
    "carrier": "Wellcare",
    "status": "Active",
    "state": "MA",
    "effectiveDate": "2023-04-24",
    "terminationDate": null,
    "productionYtd": 172550,
    "policiesYtd": 101,
    "allAgentIdsForNpn": [
      "AGT-W-8140-044"
    ],
    "carriersForNpn": [
      "Wellcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Summit Medicare Advisors > Ava King > Priya Walker",
    "hierarchyPathCarrierFirst": "AmeriLife > Wellcare > Summit Medicare Advisors > Priya Walker",
    "lineageHealth": "High Performing"
  },
  {
    "rowId": "HR-0064",
    "rootOrg": "AmeriLife",
    "agentName": "Avery Turner",
    "agentNpn": "3849232839",
    "agentId": "AGT-MOO-2839-064",
    "parentAgentNpn": "1470939445",
    "levelName": "District Manager",
    "levelId": 4,
    "lineOfBusiness": "Annuity",
    "affiliateId": "AFF-004",
    "affiliateName": "Summit Medicare Advisors",
    "carrier": "Mutual of Omaha",
    "status": "Active",
    "state": "TN",
    "effectiveDate": "2021-02-09",
    "terminationDate": null,
    "productionYtd": 106985,
    "policiesYtd": 240,
    "allAgentIdsForNpn": [
      "AGT-MOO-2839-064"
    ],
    "carriersForNpn": [
      "Mutual of Omaha"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Summit Medicare Advisors > Ava King > Avery Turner",
    "hierarchyPathCarrierFirst": "AmeriLife > Mutual of Omaha > Summit Medicare Advisors > Avery Turner",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0074",
    "rootOrg": "AmeriLife",
    "agentName": "Jordan Williams",
    "agentNpn": "9292791081",
    "agentId": "AGT-A-1081-074",
    "parentAgentNpn": "1470939445",
    "levelName": "District Manager",
    "levelId": 4,
    "lineOfBusiness": "PDP",
    "affiliateId": "AFF-004",
    "affiliateName": "Summit Medicare Advisors",
    "carrier": "Aetna",
    "status": "Active",
    "state": "VA",
    "effectiveDate": "2021-06-23",
    "terminationDate": null,
    "productionYtd": 207089,
    "policiesYtd": 201,
    "allAgentIdsForNpn": [
      "AGT-A-1081-074"
    ],
    "carriersForNpn": [
      "Aetna"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Summit Medicare Advisors > Ava King > Jordan Williams",
    "hierarchyPathCarrierFirst": "AmeriLife > Aetna > Summit Medicare Advisors > Jordan Williams",
    "lineageHealth": "High Performing"
  },
  {
    "rowId": "HR-0191",
    "rootOrg": "AmeriLife",
    "agentName": "Lucas Green",
    "agentNpn": "6141226746",
    "agentId": "AGT-A-6746-191",
    "parentAgentNpn": "8877444318",
    "levelName": "District Manager",
    "levelId": 4,
    "lineOfBusiness": "Medicare Advantage",
    "affiliateId": "AFF-004",
    "affiliateName": "Summit Medicare Advisors",
    "carrier": "Anthem",
    "status": "Active",
    "state": "OH",
    "effectiveDate": "2025-09-14",
    "terminationDate": null,
    "productionYtd": 52685,
    "policiesYtd": 202,
    "allAgentIdsForNpn": [
      "AGT-A-6746-191",
      "AGT-DH-6746-084"
    ],
    "carriersForNpn": [
      "Anthem",
      "Devoted Health"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Summit Medicare Advisors > Ethan Perez > Lucas Green",
    "hierarchyPathCarrierFirst": "AmeriLife > Anthem > Summit Medicare Advisors > Lucas Green",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0084",
    "rootOrg": "AmeriLife",
    "agentName": "Lucas Green",
    "agentNpn": "6141226746",
    "agentId": "AGT-DH-6746-084",
    "parentAgentNpn": "8877444318",
    "levelName": "District Manager",
    "levelId": 4,
    "lineOfBusiness": "Life",
    "affiliateId": "AFF-004",
    "affiliateName": "Summit Medicare Advisors",
    "carrier": "Devoted Health",
    "status": "Pending",
    "state": "OH",
    "effectiveDate": "2025-09-01",
    "terminationDate": null,
    "productionYtd": 25999,
    "policiesYtd": 203,
    "allAgentIdsForNpn": [
      "AGT-A-6746-191",
      "AGT-DH-6746-084"
    ],
    "carriersForNpn": [
      "Anthem",
      "Devoted Health"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Summit Medicare Advisors > Ethan Perez > Lucas Green",
    "hierarchyPathCarrierFirst": "AmeriLife > Devoted Health > Summit Medicare Advisors > Lucas Green",
    "lineageHealth": "Pending"
  },
  {
    "rowId": "HR-0134",
    "rootOrg": "AmeriLife",
    "agentName": "Finley Chen",
    "agentNpn": "5838636972",
    "agentId": "AGT-A-6972-134",
    "parentAgentNpn": "9292791081",
    "levelName": "Agent",
    "levelId": 5,
    "lineOfBusiness": "PDP",
    "affiliateId": "AFF-004",
    "affiliateName": "Summit Medicare Advisors",
    "carrier": "Anthem",
    "status": "Terminated",
    "state": "NJ",
    "effectiveDate": "2020-08-02",
    "terminationDate": "2022-11-22",
    "productionYtd": 17278,
    "policiesYtd": 84,
    "allAgentIdsForNpn": [
      "AGT-A-6972-134"
    ],
    "carriersForNpn": [
      "Anthem"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Summit Medicare Advisors > Ava King > Jordan Williams > Finley Chen",
    "hierarchyPathCarrierFirst": "AmeriLife > Anthem > Summit Medicare Advisors > Finley Chen",
    "lineageHealth": "At Risk"
  },
  {
    "rowId": "HR-0104",
    "rootOrg": "AmeriLife",
    "agentName": "Mark Green",
    "agentNpn": "7296096954",
    "agentId": "AGT-MOO-6954-104",
    "parentAgentNpn": "3849232839",
    "levelName": "Agent",
    "levelId": 5,
    "lineOfBusiness": "Life",
    "affiliateId": "AFF-004",
    "affiliateName": "Summit Medicare Advisors",
    "carrier": "Mutual of Omaha",
    "status": "Pending",
    "state": "NJ",
    "effectiveDate": "2025-06-12",
    "terminationDate": null,
    "productionYtd": 108575,
    "policiesYtd": 69,
    "allAgentIdsForNpn": [
      "AGT-MOO-6954-104"
    ],
    "carriersForNpn": [
      "Mutual of Omaha"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Summit Medicare Advisors > Ava King > Avery Turner > Mark Green",
    "hierarchyPathCarrierFirst": "AmeriLife > Mutual of Omaha > Summit Medicare Advisors > Mark Green",
    "lineageHealth": "Pending"
  },
  {
    "rowId": "HR-0114",
    "rootOrg": "AmeriLife",
    "agentName": "Rowan Roberts",
    "agentNpn": "2062073697",
    "agentId": "AGT-MOO-3697-114",
    "parentAgentNpn": "9292791081",
    "levelName": "Agent",
    "levelId": 5,
    "lineOfBusiness": "Life",
    "affiliateId": "AFF-004",
    "affiliateName": "Summit Medicare Advisors",
    "carrier": "Mutual of Omaha",
    "status": "Active",
    "state": "MA",
    "effectiveDate": "2023-03-31",
    "terminationDate": null,
    "productionYtd": 5467,
    "policiesYtd": 83,
    "allAgentIdsForNpn": [
      "AGT-MOO-3697-114"
    ],
    "carriersForNpn": [
      "Mutual of Omaha"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Summit Medicare Advisors > Ava King > Jordan Williams > Rowan Roberts",
    "hierarchyPathCarrierFirst": "AmeriLife > Mutual of Omaha > Summit Medicare Advisors > Rowan Roberts",
    "lineageHealth": "At Risk"
  },
  {
    "rowId": "HR-0144",
    "rootOrg": "AmeriLife",
    "agentName": "Taylor Miller",
    "agentNpn": "8986950095",
    "agentId": "AGT-A-0095-144",
    "parentAgentNpn": "9292791081",
    "levelName": "Agent",
    "levelId": 5,
    "lineOfBusiness": "Dental/Vision",
    "affiliateId": "AFF-004",
    "affiliateName": "Summit Medicare Advisors",
    "carrier": "Ameritas",
    "status": "Terminated",
    "state": "NY",
    "effectiveDate": "2020-06-03",
    "terminationDate": "2021-11-09",
    "productionYtd": 162013,
    "policiesYtd": 33,
    "allAgentIdsForNpn": [
      "AGT-A-0095-144"
    ],
    "carriersForNpn": [
      "Ameritas"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Summit Medicare Advisors > Ava King > Jordan Williams > Taylor Miller",
    "hierarchyPathCarrierFirst": "AmeriLife > Ameritas > Summit Medicare Advisors > Taylor Miller",
    "lineageHealth": "At Risk"
  },
  {
    "rowId": "HR-0094",
    "rootOrg": "AmeriLife",
    "agentName": "Harper Young",
    "agentNpn": "4300636585",
    "agentId": "AGT-U-6585-094",
    "parentAgentNpn": "6141226746",
    "levelName": "Writing Agent",
    "levelId": 6,
    "lineOfBusiness": "Dental/Vision",
    "affiliateId": "AFF-004",
    "affiliateName": "Summit Medicare Advisors",
    "carrier": "UnitedHealthcare",
    "status": "Active",
    "state": "GA",
    "effectiveDate": "2021-03-19",
    "terminationDate": null,
    "productionYtd": 145821,
    "policiesYtd": 94,
    "allAgentIdsForNpn": [
      "AGT-U-6585-094"
    ],
    "carriersForNpn": [
      "UnitedHealthcare"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Summit Medicare Advisors > Ethan Perez > Lucas Green > Harper Young",
    "hierarchyPathCarrierFirst": "AmeriLife > UnitedHealthcare > Summit Medicare Advisors > Harper Young",
    "lineageHealth": "Healthy"
  },
  {
    "rowId": "HR-0156",
    "rootOrg": "AmeriLife",
    "agentName": "Logan Hall",
    "agentNpn": "6922713963",
    "agentId": "AGT-A-3963-156",
    "parentAgentNpn": "6141226746",
    "levelName": "Writing Agent",
    "levelId": 6,
    "lineOfBusiness": "Annuity",
    "affiliateId": "AFF-004",
    "affiliateName": "Summit Medicare Advisors",
    "carrier": "Allstate",
    "status": "Terminated",
    "state": "NJ",
    "effectiveDate": "2020-03-08",
    "terminationDate": "2022-02-13",
    "productionYtd": 63422,
    "policiesYtd": 183,
    "allAgentIdsForNpn": [
      "AGT-A-3963-156",
      "AGT-DH-3963-124"
    ],
    "carriersForNpn": [
      "Allstate",
      "Devoted Health"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Summit Medicare Advisors > Ethan Perez > Lucas Green > Logan Hall",
    "hierarchyPathCarrierFirst": "AmeriLife > Allstate > Summit Medicare Advisors > Logan Hall",
    "lineageHealth": "At Risk"
  },
  {
    "rowId": "HR-0124",
    "rootOrg": "AmeriLife",
    "agentName": "Logan Hall",
    "agentNpn": "6922713963",
    "agentId": "AGT-DH-3963-124",
    "parentAgentNpn": "6141226746",
    "levelName": "Writing Agent",
    "levelId": 6,
    "lineOfBusiness": "Dental/Vision",
    "affiliateId": "AFF-004",
    "affiliateName": "Summit Medicare Advisors",
    "carrier": "Devoted Health",
    "status": "Terminated",
    "state": "NJ",
    "effectiveDate": "2024-12-16",
    "terminationDate": "2026-04-20",
    "productionYtd": 72004,
    "policiesYtd": 151,
    "allAgentIdsForNpn": [
      "AGT-A-3963-156",
      "AGT-DH-3963-124"
    ],
    "carriersForNpn": [
      "Allstate",
      "Devoted Health"
    ],
    "hierarchyPathAffiliateFirst": "AmeriLife > Summit Medicare Advisors > Ethan Perez > Lucas Green > Logan Hall",
    "hierarchyPathCarrierFirst": "AmeriLife > Devoted Health > Summit Medicare Advisors > Logan Hall",
    "lineageHealth": "At Risk"
  }
];

export const ROOT_ORG = "AmeriLife";
