import React from 'react';

import {
  TabConfig,
  ThemedTabs,
} from '@/components/atoms/ThemedTabs';
import { IconName } from '@/constants/iconTypes';

export default function TabLayout() {
  const tabs: TabConfig[] = [
    {
      name: 'index',
      title: 'Home',
      iconName: IconName.house,
    },
    {
      name: 'explore',
      title: 'Explore',
      iconName: IconName.dog,
    },
  ];

  return <ThemedTabs tabs={tabs} />;
}
