import React from 'react';
import { Typography, FormControl, Select, MenuItem, InputLabel } from '@mui/material';
import { useTranslation } from 'react-i18next';

const DateFormatSelect = ({ dateFormat, onDateFormatChange }) => {
  const { t } = useTranslation();

  return (
    <FormControl fullWidth>
      <InputLabel id="date-format-label">{t('Date Format')}</InputLabel>
      <Select
        labelId="date-format-label"
        id="date-format"
        value={dateFormat}
        label={t('Date Format')}
        onChange={(e) => onDateFormatChange(e.target.value)}
      >
        <MenuItem value="DD/MM/YYYY">DD/MM/YYYY</MenuItem>
        <MenuItem value="MM/DD/YYYY">MM/DD/YYYY</MenuItem>
        <MenuItem value="YYYY-MM-DD">YYYY-MM-DD</MenuItem>
      </Select>
    </FormControl>
  );
};

export default DateFormatSelect;
