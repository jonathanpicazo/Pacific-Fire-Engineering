import React from 'react';
import Script from 'next/script';

const FAQJsonLd: React.FC = () => {
  const payload = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'I am planning to lease a new building that was designed for High Pile Storage. Are there any changes to the sprinklers or building needed since the building has already been designed for High Pile Storage?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'There will probably be some additions like Fire Hose Stations and possibly draft curtains. In addition, your specific use, storage, and commodity will need to be reviewed to verify that the design of the building (i.e., Sprinkler density, smoke vent ratios, access doors, and building access) matches your situation. Not all buildings designed for High Pile Storage are created equal.',
        },
      },
      {
        '@type': 'Question',
        name: 'I have a small warehouse in my building and the fire department says that since I have storage over 12\'-0" I have High Pile Storage. My building does not have fire sprinklers. Do I have to install a fire sprinkler system?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Not necessarily, you may have an area that is small enough that meeting the criteria for Smoke Vents, Draft Stops, Fire Hose, Access, and Alarms may allow you to avoid the installation of a Fire Sprinkler System.',
        },
      },
      {
        '@type': 'Question',
        name: 'We store cosmetics in our warehouse and have more Class I-B Flammable Liquids than the exempt amount allowed in the Uniform Fire Code. Is there any way that we can store more than 60 gallons without building an H-Room?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, the code allows for the exempt amount to be doubled if the building is equipped with Fire Sprinklers. The code also allows that the amount can be doubled again if the Liquid is stored in approved cabinets. Finally, the building can have more than one control area, up to four in a warehouse.',
        },
      },
      {
        '@type': 'Question',
        name: 'I have High Pile Storage on Pallet Racks. We receive pallets of all sizes and some do not fit well on our racks. We have installed plywood on the racks to hold all of the pallets. The Fire Department has stated that we need In-Rack Sprinklers because of the plywood. Is there any way to avoid the In-Rack Sprinklers and keep the plywood?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In general, no. There are some specific exceptions to solid shelving but for most uses, each level of storage would require In-Rack Fire Sprinklers. The intent of the code is to allow water to get from the roof sprinklers down through the commodities to the lower levels of the racks; solid shelving prevents the water from reaching a fire in the lower rack levels.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are all plastics High Hazard Commodities?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, some plastics are Class III and Class IV Commodities. There are some conditions where even the plastics that are High Hazard are not protected as if they are High Hazard.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why should I have a Quarterly Inspection of my Fire Sprinkler System?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'First, many Jurisdictions and Insurance Agencies require that the Systems have Quarterly Inspections. Secondly, if the inspections include operation of the valves, lubrication of the valves, painting, and ringing of the bells, you will not only ensure the functioning of the system in the event of a fire but your Five-Year Certification will involve much less repair due to parts rusting shut. In the event of a fire, you will have made every effort to maintain your systems.',
        },
      },
      {
        '@type': 'Question',
        name: "What advantage is there in having our Fire Sprinkler Plans pre-designed for bidding? Don't the fire sprinkler contractors have to sprinkler the building according to its size and water availability?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The advantage is having one set of specifications, design criteria, and layout for quotations. This eliminates most, if not all, of the bid qualifications that come in at the last second at bid time. If you have ever tried to decide if .45 for 4000 is equivalent to .60 for 3000, you can understand the confusion. In addition, with the use of ESFR and ESFR Ready Systems, prior to the General Bid, many decisions have had to be made to the structure to accommodate a system that has some very specific criteria in design.',
        },
      },
      {
        '@type': 'Question',
        name: "The Fire Department has told me to lower my empty pallet storage. I thought that wood was a Class III Commodity, why can't I store to 12'-0\"?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Just like some Plastics that are High Hazard may be treated like other commodities, some configurations of lesser commodities may be treated like High Hazard. Stacking idle pallets creates not only a chimney but also plenty of dry wood for the fire.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there one Fire Sprinkler System that can be designed for a building that will cover all conditions and storage?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'There is no single Fire Sprinkler System that can be designed for a building that will cover all conditions and storage. Each situation requires a specific design to ensure adequate fire protection.',
        },
      },
    ],
  };
  return (
    <Script id="json-ld-faq" type="application/ld+json">
      {JSON.stringify(payload)}
    </Script>
  );
};

export default FAQJsonLd;
