import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';
import {CSDN_PROFILE} from "@/constants";

const Footer: React.FC = () => {
  const defaultMessage = 'Rudy';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      links={[
        {
          key: 'csdnProfile',
          title: 'CSDN',
          href: CSDN_PROFILE,
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined /> Rudy GitHub</>,
          href: 'https://github.com/RudyJMonster',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
