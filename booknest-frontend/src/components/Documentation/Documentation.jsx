import { Box, Link, Typography } from "@mui/material";
import React, { FC } from "react";

import { useTranslation } from "react-i18next";

const Documentation: FC = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        BookNest {t("Documentation")}
      </Typography>
      <Typography variant="body1">
        {t(
          "Welcome to the BookNest project documentation. Here you will find information about the functionality of each section of the application."
        )}
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          1. {t("Shop Settings")} ({t("Shop Settings")})
        </Typography>
        <Typography variant="body1" paragraph>
          {t(
            "In the 'Shop Settings' section, you can configure the domain and name of your shop. The settings saving function, transferring the shop to another domain, and deleting the shop are also available. In case of an error during loading settings, the corresponding message will be displayed."
          )}
        </Typography>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          2. {t("Settings")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t(
            "In the 'Settings' section, you can select the primary and secondary colors for your widget, set the widget title, and specify your business's working hours. These settings allow you to customize the booking widget to match your brand."
          )}
        </Typography>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          3. {t("Booking Page")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t(
            "The 'Booking Page' section allows your clients to leave their information and book services by choosing the date and time. Here, they enter their name, email, service, date, and time of booking."
          )}
        </Typography>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          4. {t("Booking History")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t(
            "In the 'Booking History' section, all bookings made by clients are displayed. You can view the booking ID, client's name, their email, and the date and time of the booking."
          )}
        </Typography>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          5. {t("Admin Dashboard")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t(
            "The 'Admin Dashboard' allows you to edit and delete bookings. You can change booking details such as name, email, date, and time, and also delete unnecessary bookings."
          )}
        </Typography>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          6. {t("Customer Reviews")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t(
            "The 'Customer Reviews' section allows clients to leave reviews about your services. Clients can enter their name, leave a review, and rate the services on a five-star scale. The submitted reviews are displayed on this same page."
          )}
        </Typography>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          7. {t("Booking Analytics")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t(
            "In the 'Booking Analytics' section, you can view booking statistics. Graphs showing the number of bookings for the selected period are displayed."
          )}
        </Typography>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          8. {t("Additional Resources")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t(
            "Additional resources that might be useful for getting started with the project:"
          )}
        </Typography>
        <Link href="#" sx={{ display: "block", mb: 1 }}>
          {t("Getting Started Guide")}
        </Link>
        <Link href="#" sx={{ display: "block", mb: 1 }}>
          {t("API Documentation")}
        </Link>
        <Link href="#" sx={{ display: "block", mb: 1 }}>
          {t("User Manual")}
        </Link>
      </Box>
    </Box>
  );
};

export default Documentation;
