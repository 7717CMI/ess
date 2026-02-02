'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

// Interface for ESS Customer Data
interface ESSCustomerData {
  sNo: number
  companyName: string
  endUseApplication: string
  headquarters: string
  keyMarketFocus: string
  customerType: string
  storageRequirements: string
  containerSize: string
  capacityRange: string
  totalQuantityOfContainers: string
  energyStorageDuration: string
  deploymentAreas: string
  annualEnergyStorageRequirement: string
  deploymentTimeline: string
  keyChallenges: string
  keyValueDrivers: string
  currentESSProviders: string
  strategicGoals: string
  valuePropositionForMaxxen: string
  keyContactPerson: string
  contactEmail: string
}

// Realistic ESS customer data for Europe
const essCustomerData: ESSCustomerData[] = [
  {
    sNo: 1,
    companyName: 'Energie Baden-Württemberg (EnBW)',
    endUseApplication: 'Grid Stabilization & Renewable Integration',
    headquarters: 'Karlsruhe, Germany',
    keyMarketFocus: 'Utility-scale storage, Grid services',
    customerType: 'Utility Company',
    storageRequirements: '200-500 MWh',
    containerSize: '20ft & 40ft containers',
    capacityRange: '2.5 MWh per container',
    totalQuantityOfContainers: '80-200 units',
    energyStorageDuration: '2-4 hours',
    deploymentAreas: 'Southern Germany, Baden-Württemberg region',
    annualEnergyStorageRequirement: '300-400 MWh',
    deploymentTimeline: 'Q2 2026 - Q4 2027',
    keyChallenges: 'Grid connection permits, Battery degradation management, Seasonal demand variations',
    keyValueDrivers: 'Cost per MWh, Cycle life, Fire safety certification, Fast deployment',
    currentESSProviders: 'Tesla Megapack, Fluence, BYD',
    strategicGoals: 'Achieve 30% renewable energy storage by 2028, Support wind farm integration',
    valuePropositionForMaxxen: 'Cost-effective second-life solution, Sustainable circular economy approach, Reduced upfront capex',
    keyContactPerson: 'Dr. Klaus Müller',
    contactEmail: 'klaus.mueller@enbw.com'
  },
  {
    sNo: 2,
    companyName: 'RWE Renewables',
    endUseApplication: 'Solar & Wind Farm Energy Storage',
    headquarters: 'Essen, Germany',
    keyMarketFocus: 'Renewable energy curtailment reduction',
    customerType: 'Renewable Energy Developer',
    storageRequirements: '150-300 MWh',
    containerSize: '40ft containers preferred',
    capacityRange: '2.5-3 MWh per container',
    totalQuantityOfContainers: '50-100 units',
    energyStorageDuration: '2-3 hours',
    deploymentAreas: 'North Rhine-Westphalia, Lower Saxony',
    annualEnergyStorageRequirement: '200-250 MWh',
    deploymentTimeline: 'Q3 2026 - Q2 2027',
    keyChallenges: 'Integration with existing solar farms, Remote monitoring capabilities, Weather-resistant enclosures',
    keyValueDrivers: 'Round-trip efficiency, Warranty coverage, Modular scalability, Quick ROI',
    currentESSProviders: 'Fluence, Sungrow, Wartsila',
    strategicGoals: 'Install 500 MWh storage capacity across wind farms by 2029',
    valuePropositionForMaxxen: 'Lower cost per MWh than new batteries, Proven EV battery heritage, German engineering quality',
    keyContactPerson: 'Anna Schmidt',
    contactEmail: 'anna.schmidt@rwe.com'
  },
  {
    sNo: 3,
    companyName: 'Vattenfall AB',
    endUseApplication: 'Frequency Regulation & Peak Shaving',
    headquarters: 'Stockholm, Sweden (Germany operations)',
    keyMarketFocus: 'Grid services, Ancillary services market',
    customerType: 'Energy Service Provider',
    storageRequirements: '100-200 MWh',
    containerSize: '20ft containers',
    capacityRange: '2 MWh per container',
    totalQuantityOfContainers: '50-100 units',
    energyStorageDuration: '1-2 hours (fast response)',
    deploymentAreas: 'Berlin, Hamburg, Northern Germany',
    annualEnergyStorageRequirement: '150-180 MWh',
    deploymentTimeline: 'Q1 2027 - Q4 2027',
    keyChallenges: 'Rapid response requirements (<1 second), High cycle count (2-3 cycles/day), Grid code compliance',
    keyValueDrivers: 'Response time, Cycle life warranty, Maintenance intervals, Remote diagnostics',
    currentESSProviders: 'Tesla, Younicos (Aggreko), Fluence',
    strategicGoals: 'Participate in all European frequency regulation markets by 2028',
    valuePropositionForMaxxen: 'Proven automotive-grade cells, Cost advantage for high-cycle applications, Flexible sizing',
    keyContactPerson: 'Erik Johansson',
    contactEmail: 'erik.johansson@vattenfall.com'
  },
  {
    sNo: 4,
    companyName: 'Enel Green Power',
    endUseApplication: 'Hybrid Renewable + Storage Projects',
    headquarters: 'Rome, Italy (European operations)',
    keyMarketFocus: 'Solar+storage, Wind+storage hybrids',
    customerType: 'Renewable IPP',
    storageRequirements: '250-400 MWh',
    containerSize: '40ft containers',
    capacityRange: '3 MWh per container',
    totalQuantityOfContainers: '80-130 units',
    energyStorageDuration: '3-4 hours',
    deploymentAreas: 'Spain, Italy, Southern Europe',
    annualEnergyStorageRequirement: '300-350 MWh',
    deploymentTimeline: 'Q2 2026 - Q1 2028',
    keyChallenges: 'Hot climate operation (Spain/Italy), Dust management, DC-coupled vs AC-coupled design',
    keyValueDrivers: 'Operating temperature range, Energy density, Inverter compatibility, Total cost of ownership',
    currentESSProviders: 'BYD, Sungrow, Huawei',
    strategicGoals: 'Deploy 2 GWh of storage across European renewable portfolio by 2030',
    valuePropositionForMaxxen: 'Second-life batteries ideal for 1-2 cycle/day applications, Lower capex enables more projects, European supply chain',
    keyContactPerson: 'Marco Rossi',
    contactEmail: 'marco.rossi@enel.com'
  },
  {
    sNo: 5,
    companyName: 'E.ON Energy Storage',
    endUseApplication: 'Commercial & Industrial (C&I) Energy Storage',
    headquarters: 'Düsseldorf, Germany',
    keyMarketFocus: 'C&I peak shaving, Demand charge management',
    customerType: 'Energy Service Company (ESCO)',
    storageRequirements: '50-150 MWh (distributed)',
    containerSize: '20ft containers (for C&I sites)',
    capacityRange: '1-2 MWh per container',
    totalQuantityOfContainers: '25-75 units across multiple sites',
    energyStorageDuration: '2-4 hours',
    deploymentAreas: 'Germany, UK, Netherlands (industrial zones)',
    annualEnergyStorageRequirement: '80-120 MWh',
    deploymentTimeline: 'Q4 2026 - Q3 2027',
    keyChallenges: 'Site-specific customization, Multiple stakeholder coordination, Behind-the-meter integration',
    keyValueDrivers: 'Compact footprint, Plug-and-play installation, Demand charge savings, Energy arbitrage revenue',
    currentESSProviders: 'Tesla Powerpack, Sonnen, Alpha ESS',
    strategicGoals: 'Install storage at 200+ commercial sites by 2029',
    valuePropositionForMaxxen: 'Right-sized capacity for C&I (1-2 MWh), Attractive pricing for distributed deployments, Lower risk for energy-as-a-service model',
    keyContactPerson: 'Hans Weber',
    contactEmail: 'hans.weber@eon.com'
  },
  {
    sNo: 6,
    companyName: 'Iberdrola Renewables',
    endUseApplication: 'Wind Farm Output Stabilization',
    headquarters: 'Bilbao, Spain',
    keyMarketFocus: 'Offshore & onshore wind storage',
    customerType: 'Utility & Renewable Developer',
    storageRequirements: '200-350 MWh',
    containerSize: '40ft marine-grade containers',
    capacityRange: '2.5-3 MWh per container',
    totalQuantityOfContainers: '70-120 units',
    energyStorageDuration: '2-3 hours',
    deploymentAreas: 'Spain, Portugal, UK (offshore wind sites)',
    annualEnergyStorageRequirement: '250-300 MWh',
    deploymentTimeline: 'Q1 2027 - Q4 2027',
    keyChallenges: 'Marine environment (salt, humidity), Wind variability smoothing, Grid connection constraints',
    keyValueDrivers: 'Corrosion resistance, Weather-proof design, Low maintenance, Predictable performance',
    currentESSProviders: 'Fluence, Wartsila, Siemens Energy',
    strategicGoals: 'Pair 50% of new wind farms with storage by 2030',
    valuePropositionForMaxxen: 'Marine-grade enclosures available, Suitable for moderate cycling, Strong German engineering for harsh environments',
    keyContactPerson: 'Carmen López',
    contactEmail: 'carmen.lopez@iberdrola.com'
  },
  {
    sNo: 7,
    companyName: 'Fortum Corporation',
    endUseApplication: 'District Heating & CHP Plant Backup',
    headquarters: 'Espoo, Finland (European ops)',
    keyMarketFocus: 'Thermal storage integration, Grid backup',
    customerType: 'District Heating Provider',
    storageRequirements: '80-150 MWh',
    containerSize: '20ft & 40ft containers',
    capacityRange: '2 MWh per container',
    totalQuantityOfContainers: '40-75 units',
    energyStorageDuration: '4-6 hours',
    deploymentAreas: 'Finland, Sweden, Poland',
    annualEnergyStorageRequirement: '100-130 MWh',
    deploymentTimeline: 'Q3 2026 - Q2 2027',
    keyChallenges: 'Cold climate operation (-20°C to -30°C), Heating system integration, Long duration requirements',
    keyValueDrivers: 'Cold weather performance, Battery heating systems, Long discharge duration, Lifecycle cost',
    currentESSProviders: 'Wartsila, ABB, local integrators',
    strategicGoals: 'Electrify heating systems with renewable+storage by 2029',
    valuePropositionForMaxxen: 'Cost-effective for long-duration applications, Thermal management systems included, Suitable for Nordic climate',
    keyContactPerson: 'Sanna Virtanen',
    contactEmail: 'sanna.virtanen@fortum.com'
  },
  {
    sNo: 8,
    companyName: 'Statkraft AS',
    endUseApplication: 'Hydropower Balancing & Grid Services',
    headquarters: 'Oslo, Norway',
    keyMarketFocus: 'Renewable energy trading, Balancing markets',
    customerType: 'Renewable Energy Trader',
    storageRequirements: '120-250 MWh',
    containerSize: '40ft containers',
    capacityRange: '3 MWh per container',
    totalQuantityOfContainers: '40-80 units',
    energyStorageDuration: '2-3 hours',
    deploymentAreas: 'Norway, Germany, UK',
    annualEnergyStorageRequirement: '150-200 MWh',
    deploymentTimeline: 'Q2 2027 - Q4 2027',
    keyChallenges: 'Integration with hydro dispatch, Market price optimization, Multiple market participation',
    keyValueDrivers: 'Trading platform integration, Fast response, Arbitrage capability, Low degradation',
    currentESSProviders: 'Tesla, Fluence, Nidec ASI',
    strategicGoals: 'Optimize energy trading with 1 GWh of battery storage by 2030',
    valuePropositionForMaxxen: 'Lower acquisition cost enables faster payback, Suitable for energy arbitrage (1-2 cycles/day), European-based support',
    keyContactPerson: 'Ole Kristian Berg',
    contactEmail: 'ole.berg@statkraft.com'
  },
  {
    sNo: 9,
    companyName: 'TotalEnergies Renewables',
    endUseApplication: 'Solar Plant Energy Storage',
    headquarters: 'Paris, France',
    keyMarketFocus: 'Utility solar+storage, PPA optimization',
    customerType: 'Integrated Energy Company',
    storageRequirements: '180-300 MWh',
    containerSize: '40ft containers',
    capacityRange: '2.5 MWh per container',
    totalQuantityOfContainers: '70-120 units',
    energyStorageDuration: '3-4 hours',
    deploymentAreas: 'France, Spain, Belgium',
    annualEnergyStorageRequirement: '220-280 MWh',
    deploymentTimeline: 'Q1 2027 - Q3 2027',
    keyChallenges: 'PPA contract optimization, Grid curtailment avoidance, Regulatory compliance (France)',
    keyValueDrivers: 'DC-coupling efficiency, PPA revenue enhancement, Warranty terms, Fire safety (French regulations)',
    currentESSProviders: 'Saft, Fluence, BYD',
    strategicGoals: 'Deploy 3 GWh of storage across solar portfolio by 2030',
    valuePropositionForMaxxen: 'Circular economy aligns with TotalEnergies sustainability goals, Cost advantage for PPA optimization, Local EU support',
    keyContactPerson: 'Jean-Pierre Dubois',
    contactEmail: 'jp.dubois@totalenergies.com'
  },
  {
    sNo: 10,
    companyName: 'National Grid ESO',
    endUseApplication: 'Transmission System Frequency Response',
    headquarters: 'Warwick, UK',
    keyMarketFocus: 'Grid stability, Frequency regulation',
    customerType: 'Transmission System Operator',
    storageRequirements: '150-250 MWh',
    containerSize: '40ft containers',
    capacityRange: '2.5 MWh per container',
    totalQuantityOfContainers: '60-100 units',
    energyStorageDuration: '1-2 hours (fast response)',
    deploymentAreas: 'England, Wales (strategic grid locations)',
    annualEnergyStorageRequirement: '180-220 MWh',
    deploymentTimeline: 'Q4 2026 - Q2 2027',
    keyChallenges: 'Sub-second response requirements, High cycling (3-5 cycles/day), Grid code G99 compliance',
    keyValueDrivers: 'Response time <1 sec, Cycle life >6000 cycles, Availability >95%, Revenue stacking capability',
    currentESSProviders: 'Tesla, Fluence, Gore Street Capital',
    strategicGoals: 'Procure 2 GW of fast frequency response by 2028',
    valuePropositionForMaxxen: 'Automotive-grade cells proven for fast response, Cost-effective for revenue stacking, Modular for staged deployment',
    keyContactPerson: 'James Richardson',
    contactEmail: 'james.richardson@nationalgrideso.com'
  }
]

export default function CustomerIntelligenceDatabase() {
  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <div className="w-full bg-white rounded-lg">
      <div className="mb-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-1">Customer Intelligence Database</h2>
        <p className="text-gray-600 text-sm">Europe Containerized Second Life ESS Market - Comprehensive Customer Overview</p>
      </div>

      {/* Collapsible Section */}
      <div className="border border-gray-300 rounded-lg mb-4">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between bg-gray-100 px-4 py-3 rounded-t-lg hover:bg-gray-200 transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold text-gray-800">Proposition 1</span>
            <span className="text-sm text-gray-600 font-normal">({essCustomerData.length} potential customers)</span>
          </div>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-gray-600" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-600" />
          )}
        </button>

        {isExpanded && (
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                {/* Main Section Headers */}
                <tr>
                  <th rowSpan={2} className="bg-yellow-50 border border-gray-300 px-2 py-3 text-center text-xs font-bold text-gray-800 min-w-[50px] sticky left-0 z-20">
                    S.No.
                  </th>
                  <th colSpan={5} className="bg-[#E8D4B8] border border-gray-300 px-3 py-2 text-center text-sm font-bold text-gray-900">
                    COMPANY INFORMATION
                  </th>
                  <th colSpan={4} className="bg-[#C5E1A5] border border-gray-300 px-3 py-2 text-center text-sm font-bold text-gray-900">
                    TECHNICAL REQUIREMENTS
                  </th>
                  <th colSpan={4} className="bg-[#CE93D8] border border-gray-300 px-3 py-2 text-center text-sm font-bold text-gray-900">
                    DEPLOYMENT DETAILS
                  </th>
                  <th colSpan={5} className="bg-[#FFCC80] border border-gray-300 px-3 py-2 text-center text-sm font-bold text-gray-900">
                    STRATEGIC INSIGHTS
                  </th>
                  <th colSpan={2} className="bg-[#90CAF9] border border-gray-300 px-3 py-2 text-center text-sm font-bold text-gray-900">
                    CONTACT INFORMATION
                  </th>
                </tr>

                {/* Column Headers */}
                <tr>
                  {/* Company Information */}
                  <th className="bg-[#F5E6D3] border border-gray-300 px-3 py-2 text-left text-[11px] font-semibold text-gray-800 min-w-[180px]">
                    Customer/Company Name
                  </th>
                  <th className="bg-[#F5E6D3] border border-gray-300 px-3 py-2 text-left text-[11px] font-semibold text-gray-800 min-w-[180px]">
                    End Use Application
                  </th>
                  <th className="bg-[#F5E6D3] border border-gray-300 px-3 py-2 text-left text-[11px] font-semibold text-gray-800 min-w-[150px]">
                    Headquarters
                  </th>
                  <th className="bg-[#F5E6D3] border border-gray-300 px-3 py-2 text-left text-[11px] font-semibold text-gray-800 min-w-[160px]">
                    Key Market Focus
                  </th>
                  <th className="bg-[#F5E6D3] border border-gray-300 px-3 py-2 text-left text-[11px] font-semibold text-gray-800 min-w-[140px]">
                    Customer Type
                  </th>

                  {/* Technical Requirements */}
                  <th className="bg-[#E8F5E9] border border-gray-300 px-3 py-2 text-left text-[11px] font-semibold text-gray-800 min-w-[140px]">
                    Storage Requirements
                  </th>
                  <th className="bg-[#E8F5E9] border border-gray-300 px-3 py-2 text-left text-[11px] font-semibold text-gray-800 min-w-[140px]">
                    Container Size
                  </th>
                  <th className="bg-[#E8F5E9] border border-gray-300 px-3 py-2 text-left text-[11px] font-semibold text-gray-800 min-w-[140px]">
                    Capacity Range
                  </th>
                  <th className="bg-[#E8F5E9] border border-gray-300 px-3 py-2 text-left text-[11px] font-semibold text-gray-800 min-w-[160px]">
                    Total Quantity of Containers
                  </th>

                  {/* Deployment Details */}
                  <th className="bg-[#F3E5F5] border border-gray-300 px-3 py-2 text-left text-[11px] font-semibold text-gray-800 min-w-[160px]">
                    Energy Storage Duration
                  </th>
                  <th className="bg-[#F3E5F5] border border-gray-300 px-3 py-2 text-left text-[11px] font-semibold text-gray-800 min-w-[180px]">
                    Deployment Areas
                  </th>
                  <th className="bg-[#F3E5F5] border border-gray-300 px-3 py-2 text-left text-[11px] font-semibold text-gray-800 min-w-[180px]">
                    Annual Energy Storage Requirement
                  </th>
                  <th className="bg-[#F3E5F5] border border-gray-300 px-3 py-2 text-left text-[11px] font-semibold text-gray-800 min-w-[140px]">
                    Deployment Timeline
                  </th>

                  {/* Strategic Insights */}
                  <th className="bg-[#FFE0B2] border border-gray-300 px-3 py-2 text-left text-[11px] font-semibold text-gray-800 min-w-[220px]">
                    Key Challenges
                  </th>
                  <th className="bg-[#FFE0B2] border border-gray-300 px-3 py-2 text-left text-[11px] font-semibold text-gray-800 min-w-[200px]">
                    Key Value Drivers
                  </th>
                  <th className="bg-[#FFE0B2] border border-gray-300 px-3 py-2 text-left text-[11px] font-semibold text-gray-800 min-w-[160px]">
                    Current ESS Providers
                  </th>
                  <th className="bg-[#FFE0B2] border border-gray-300 px-3 py-2 text-left text-[11px] font-semibold text-gray-800 min-w-[200px]">
                    Strategic Goals
                  </th>
                  <th className="bg-[#FFE0B2] border border-gray-300 px-3 py-2 text-left text-[11px] font-semibold text-gray-800 min-w-[250px]">
                    Value Proposition for Maxxen
                  </th>

                  {/* Contact Information */}
                  <th className="bg-[#E3F2FD] border border-gray-300 px-3 py-2 text-left text-[11px] font-semibold text-gray-800 min-w-[140px]">
                    Key Contact Person
                  </th>
                  <th className="bg-[#E3F2FD] border border-gray-300 px-3 py-2 text-left text-[11px] font-semibold text-gray-800 min-w-[180px]">
                    Contact Email
                  </th>
                </tr>
              </thead>

              <tbody>
                {essCustomerData.map((customer, index) => (
                  <tr
                    key={customer.sNo}
                    className={index % 2 === 0 ? 'bg-white hover:bg-blue-50' : 'bg-gray-50 hover:bg-blue-50'}
                  >
                    <td className="border border-gray-300 px-2 py-3 text-center text-sm font-semibold text-gray-900 sticky left-0 bg-yellow-50 z-10">
                      {customer.sNo}
                    </td>

                    {/* Company Information */}
                    <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900 font-medium">
                      {customer.companyName}
                    </td>
                    <td className="border border-gray-300 px-3 py-2 text-xs text-gray-700">
                      {customer.endUseApplication}
                    </td>
                    <td className="border border-gray-300 px-3 py-2 text-xs text-gray-700">
                      {customer.headquarters}
                    </td>
                    <td className="border border-gray-300 px-3 py-2 text-xs text-gray-700">
                      {customer.keyMarketFocus}
                    </td>
                    <td className="border border-gray-300 px-3 py-2 text-xs text-gray-700">
                      {customer.customerType}
                    </td>

                    {/* Technical Requirements */}
                    <td className="border border-gray-300 px-3 py-2 text-xs text-gray-700">
                      {customer.storageRequirements}
                    </td>
                    <td className="border border-gray-300 px-3 py-2 text-xs text-gray-700">
                      {customer.containerSize}
                    </td>
                    <td className="border border-gray-300 px-3 py-2 text-xs text-gray-700">
                      {customer.capacityRange}
                    </td>
                    <td className="border border-gray-300 px-3 py-2 text-xs text-gray-700">
                      {customer.totalQuantityOfContainers}
                    </td>

                    {/* Deployment Details */}
                    <td className="border border-gray-300 px-3 py-2 text-xs text-gray-700">
                      {customer.energyStorageDuration}
                    </td>
                    <td className="border border-gray-300 px-3 py-2 text-xs text-gray-700">
                      {customer.deploymentAreas}
                    </td>
                    <td className="border border-gray-300 px-3 py-2 text-xs text-gray-700">
                      {customer.annualEnergyStorageRequirement}
                    </td>
                    <td className="border border-gray-300 px-3 py-2 text-xs text-gray-700">
                      {customer.deploymentTimeline}
                    </td>

                    {/* Strategic Insights */}
                    <td className="border border-gray-300 px-3 py-2 text-xs text-gray-700">
                      {customer.keyChallenges}
                    </td>
                    <td className="border border-gray-300 px-3 py-2 text-xs text-gray-700">
                      {customer.keyValueDrivers}
                    </td>
                    <td className="border border-gray-300 px-3 py-2 text-xs text-gray-700">
                      {customer.currentESSProviders}
                    </td>
                    <td className="border border-gray-300 px-3 py-2 text-xs text-gray-700">
                      {customer.strategicGoals}
                    </td>
                    <td className="border border-gray-300 px-3 py-2 text-xs text-gray-700">
                      {customer.valuePropositionForMaxxen}
                    </td>

                    {/* Contact Information */}
                    <td className="border border-gray-300 px-3 py-2 text-xs text-gray-700">
                      {customer.keyContactPerson}
                    </td>
                    <td className="border border-gray-300 px-3 py-2 text-xs text-blue-600">
                      <a href={`mailto:${customer.contactEmail}`} className="hover:underline">
                        {customer.contactEmail}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
