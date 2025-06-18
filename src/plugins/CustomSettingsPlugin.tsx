import React, { useCallback } from 'react';
import { StatefulSwitch } from "@/components/Settings/StatefulSwitch";
import { useEpubNavigator } from "@/core/Hooks/Epub/useEpubNavigator";
import { ThPlugin } from "@/components/Plugins";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

export const MyCustomSetting = ({ standalone = true }) => {
  const dispatch = useAppDispatch();
  const { submitPreferences, getSetting } = useEpubNavigator();

  const updatePreference = useCallback(async (value: boolean) => {
    // Your custom logic here
    console.log('Custom setting changed:', value);

    // If you need to update EPUB preferences:
    // await submitPreferences({ customProperty: value });
  }, [submitPreferences]);

  return (
    <StatefulSwitch
      standalone={standalone}
      label="My Custom Setting"
      onChange={updatePreference}
      isSelected={false} // Your state here
    />
  );
};

export const CustomSettingsPlugin: ThPlugin = {
  id: 'custom-settings-plugin',
  name: 'Custom Settings',
  description: 'Adds custom settings to the settings menu',
  version: '1.0.0',
  components: {
    settings: {
      'my-custom-setting': {
        Comp: MyCustomSetting
      }
    }
  }
};
