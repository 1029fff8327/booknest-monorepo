import React from 'react';
import { Typography, FormControlLabel, Checkbox, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Notifications = ({ enableNotifications, onEnableNotificationsChange, enableBookingHistory, onEnableBookingHistoryChange }) => {
  const { t } = useTranslation();

  return (
    <Box>
      <Typography variant="h6">{t('Enable Notifications')}</Typography>
      <Typography variant="body2">{t('Enable to receive notifications for new bookings.')}</Typography>
      <FormControlLabel
        control={<Checkbox checked={enableNotifications} onChange={(e) => onEnableNotificationsChange(e.target.checked)} />}
        label={t('Enable Notifications')}
      />
      <Typography variant="h6">{t('Enable Booking History')}</Typography>
      <Typography variant="body2">{t('Enable to view the booking history.')}</Typography>
      <FormControlLabel
        control={<Checkbox checked={enableBookingHistory} onChange={(e) => onEnableBookingHistoryChange(e.target.checked)} />}
        label={t('Enable Booking History')}
      />
    </Box>
  );
};

export default Notifications;
