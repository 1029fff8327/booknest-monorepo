import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';
import { SketchPicker } from 'react-color';
import { useTranslation } from 'react-i18next';

const ColorPicker = ({ label, color, onChange }) => {
  const { t } = useTranslation();
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  return (
    <Box>
      <Typography variant="h6">{t(label)}</Typography>
      <Typography variant="body2">{t(`Choose the ${label.toLowerCase()} for your widget.`)}</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box
          className="color-box"
          sx={{ backgroundColor: color }}
          onClick={() => setDisplayColorPicker(!displayColorPicker)}
        />
        {displayColorPicker && (
          <Box sx={{ position: 'absolute', zIndex: 2 }}>
            <Box sx={{ position: 'fixed', top: 0, right: 0, bottom: 0, left: 0 }} onClick={() => setDisplayColorPicker(false)} />
            <SketchPicker color={color} onChangeComplete={(newColor) => onChange(newColor.hex)} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ColorPicker;
