import React from 'react';
import {
  MdOutlineMailOutline as EmailIcon,
  MdPhone as PhoneIcon,
  MdPerson as PersonIcon,
} from 'react-icons/md';
import { formatPhone } from '@/utils/helpers';

const infoHolder = {
  name: 'Mr. Steven P. Biship, P.E.',
  address: '4214 Floyd Drive Corona, California 92883',
  tel: '7149844346',
  email: 'pacificfire@me.com',
  linkedIn: '',
};

const InfoCard: React.FC = () => {
  const { name, tel, email } = infoHolder;
  return (
    <div>
      <div className="flex flex-col gap-[1px] text-primary">
        <div className="flex items-center gap-1">
          <PersonIcon />
          <span>{name}</span>
        </div>
        <div className="flex items-center gap-1">
          <PhoneIcon />
          <a href={`tel:${tel}`}>
            <span>{formatPhone(tel)}</span>
          </a>
        </div>
        <div className="flex items-center gap-1">
          <EmailIcon />
          <a href={`mailto:${email}`}>
            <span>{email}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
