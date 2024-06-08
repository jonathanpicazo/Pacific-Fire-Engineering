import React from 'react';
import type { Metadata } from 'next';
import clsx from 'clsx';
import { FAQJsonLd, Heading, Question } from '@/components';
import { layoutContainerClassNames } from '@/utils/tw';
import { siteName } from '@/utils/const';

export const metadata: Metadata = {
  title: `Frequently Asked Questions | ${siteName}`,
  description:
    'Get answers to frequently asked questions about our fire protection solutions, code compliance, and more.',
};

type QAType = {
  id: number;
  question: string;
  answer: string;
};
const qaArray: QAType[] = [
  {
    id: 1,
    question:
      'I am planning to lease a new building that was designed for High Pile Storage. Are there any changes to the sprinklers or building needed since the building has already been designed for High Pile Storage?',
    answer:
      'There will probably be some additions like Fire Hose Stations and possibly draft curtains. In addition your specific use, storage and commodity will need to be reviewed to verify that the design of the building (ie. Sprinkler density, smoke vent ratios, access doors and building access) matches your situation. Not all buildings designed for High Pile Storage are created equal.',
  },
  {
    id: 2,
    question:
      'I have a small warehouse in my building and the fire department says that since I have storage over 12\'-0" I have High Pile Storage. My building does not have fire sprinklers. Do I have to install a fire sprinkler system?',
    answer:
      'Not necessarily, you may have an area that is small enough that meeting the criteria for Smoke Vents, Draft Stops, Fire Hose, Access and Alarms may allow you to avoid the installation of a Fire Sprinkler System.',
  },
  {
    id: 3,
    question:
      'We store cosmetics in our warehouse and have more Class I-B Flammable Liquids than the exempt amount allowed in the Uniform Fire Code. Is there any way that we can store more than 60 gallons without building an H-Room?',
    answer:
      'Yes, the code allows for the exempt amount to be doubled if the building is equipped with Fire Sprinklers. The code also allows that the amount can be doubled again if the Liquid is stored in approved cabinets. And finally the building can have more than one control area, up to four in a warehouse.',
  },
  {
    id: 4,
    question:
      'I have High Pile Storage on Pallet Racks. We receive pallets of all sizes and some do not fit well on our racks. We have installed plywood on the racks to hold all of the pallets. The Fire Department has stated that we need In-Rack Sprinklers because of the plywood. Is there any way to avoid the In-Rack Sprinklers and keep the plywood.',
    answer:
      'In general No. There are some specific exceptions to solid shelving but for most uses each level of storage would require In-Rack Fire Sprinklers. The intent of the code is to allow water to get from the roof sprinklers down through the commodities to the lower levels of the racks, solid shelving prevents the water from reaching a fire in the lower rack levels.',
  },
  {
    id: 5,
    question: 'Are all plastics High Hazard Commodities?',
    answer:
      'No, some plastics are Class III and Class IV Commodities. There are some conditions where even the plastics that are High Hazard are not protected as if they are High Hazard.',
  },
  {
    id: 6,
    question:
      'Why should I have a Quarterly Inspection of my Fire Sprinkler System?',
    answer:
      'First many Jurisdictions and Insurance Agencies require that the Systems have a Quarterly Inspections. Secondly if the inspections include operation of the valves, lubrication of the valves, painting and ringing of the bells, you will not only insure the functioning of the system in the event of a fire but your Five Year Certification will involve much less repair due to parts rusting shut. In the event of a fire you will have made every effort to maintain your systems.',
  },
  {
    id: 7,
    question:
      "What advantage is there in having our Fire Sprinkler Plans pre-designed for bidding? Don't the fire sprinkler contractors have to sprinkler the building according to its size and water availability?",
    answer:
      'The advantage is having one set of specifications, design criteria and layout for quotations. This eliminates most, if not all, of the bid qualifications that come in at the last second at bid time. If you have ever tried to decide if .45 for 4000 is equivalent to .60 for 3000, you can understand the confusion. In addition with the use of ESFR and ESFR Ready Systems, prior to the General Bid, many decisions have had to be made to the structure to accommodate a system that has some very specific criteria in design.',
  },
  {
    id: 8,
    question:
      "The Fire Department has told me to lower my empty pallet storage. I thought that wood was a Class III Commodity, why can't I store to 12'-0\"?",
    answer:
      'Just like some Plastics that are High Hazard may be treated like other commodities some configurations of lesser commodities may be treated like High Hazard. Stacking idle pallets creates not only a chimney but also plenty of dry wood for the fire.',
  },
  {
    id: 9,
    question:
      'Is there one Fire Sprinkler System that can be designed for a building that will cover all conditions and storage?',
    answer:
      'No. The building height, access and potential tenant base can be used for a good sprinkler system planning.',
  },
];

export default function Page() {
  return (
    <main>
      <FAQJsonLd />
      <div className={clsx(layoutContainerClassNames)}>
        <Heading title="Frequently Asked Questions" />
        <div className="flex flex-col gap-4">
          {qaArray.map((qa) => (
            <Question key={qa.id} question={qa.question} answer={qa.answer} />
          ))}
        </div>
      </div>
    </main>
  );
}
