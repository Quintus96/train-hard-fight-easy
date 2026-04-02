import React from 'react';

import {
  TabConfig,
  ThemedTabs,
} from '@/components/atoms/ThemedTabs';
import { IconName } from '@/constants/iconTypes';

export default function RangeTabLayout() {
  const tabs: TabConfig[] = [
    {
      name: 'index',
      title: 'Bench Mark',
      iconName: IconName.garageDoorOpen,
    },
    {
      name: 'drills',
      title: 'Drills',
      iconName: IconName.dog,
    },
  ];

  return <ThemedTabs tabs={tabs} />;
}
