import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      Settings: "Settings",
      "Primary Color": "Primary Color",
      "Choose the primary color for your widget.":
        "Choose the primary color for your widget.",
      "Secondary Color": "Secondary Color",
      "Choose the secondary color for your widget.":
        "Choose the secondary color for your widget.",
      "Widget Title": "Widget Title",
      "Enter the title for your widget.": "Enter the title for your widget.",
      Logo: "Logo",
      "Upload a logo for your widget.": "Upload a logo for your widget.",
      "Upload Logo": "Upload Logo",
      "Date Format": "Date Format",
      "Choose the date format for your widget.":
        "Choose the date format for your widget.",
      "Working Hours": "Working Hours",
      "Specify the working hours of your business.":
        "Specify the working hours of your business.",
      "Start Time": "Start Time",
      "End Time": "End Time",
      "Enable Notifications": "Enable Notifications",
      "Enable to receive notifications for new bookings.":
        "Enable to receive notifications for new bookings.",
      "Enable Booking History": "Enable Booking History",
      "Enable to view the booking history.":
        "Enable to view the booking history.",
      "Save Settings": "Save Settings",
      "Booking successful.": "Booking successful.",
      "Booking failed.": "Booking failed.",
      "Book a Service": "Book a Service",
      Name: "Name",
      Email: "Email",
      Service: "Service",
      Date: "Date",
      Time: "Time",
      "Book Now": "Book Now",
      "Booking History": "Booking History",
      Search: "Search",
      ID: "ID",
      "Customer Reviews": "Customer Reviews",
      "Leave a Review": "Leave a Review",
      "Your Name": "Your Name",
      "Your Review": "Your Review",
      "Submit Review": "Submit Review",
      "Admin Dashboard": "Admin Dashboard",
      Bookings: "Bookings",
      "Booking Analytics": "Booking Analytics",
      Period: "Period",
      Day: "Day",
      Week: "Week",
      Month: "Month",
      "Number of Bookings": "Number of Bookings",
      "Generate Report": "Generate Report",
      Actions: "Actions",
      Edit: "Edit",
      Delete: "Delete",
      "Enter new name:": "Enter new name:",
      "Booking updated successfully": "Booking updated successfully",
      "Error updating booking": "Error updating booking",
      "Are you sure you want to delete this booking?":
        "Are you sure you want to delete this booking?",
      "Booking deleted successfully": "Booking deleted successfully",
      "Error deleting booking": "Error deleting booking",
      "Booking Page": "Booking Page",
      "Shop Settings": "Shop Settings",
      Domain: "Domain",
      "Shop Name": "Shop Name",
      "Settings saved successfully": "Settings saved successfully",
      "Error saving settings": "Error saving settings",
      "Enter new account email:": "Enter new account email:",
      "Shop transferred successfully": "Shop transferred successfully",
      "Error transferring shop": "Error transferring shop",
      "Are you sure you want to delete this shop?":
        "Are you sure you want to delete this shop?",
      "Shop deleted successfully": "Shop deleted successfully",
      "Error deleting shop": "Error deleting shop",
      "Transfer Shop": "Transfer Shop",
      "Delete Shop": "Delete Shop",
      "Sign Up": "Sign Up",
      Username: "Username",
      Password: "Password",
      "Confirm Password": "Confirm Password",
      "Passwords do not match": "Passwords do not match",
      "Registration successful": "Registration successful",
      "Error during registration": "Error during registration",
      "Already have an account? Sign in": "Already have an account? Sign in",
      Login: "Login",
      "Don't have an account?": "Don't have an account?",
      "Or sign up with social media": "Or sign up with social media",
      "Create a Booking": "Create a Booking",
      "Personal Information": "Personal Information",
      "Booking Details": "Booking Details",
      "Report generated successfully.": "Report generated successfully.",
      "Account Settings": "Account Settings",
      "Update account settings": "Update account settings",
      "Error fetching shop settings": "Error fetching shop settings",
      Documentation: "Documentation",
      "Welcome to the BookNest project documentation.":
        "Welcome to the BookNest project documentation.",
      "Here you can manage your account settings.":
        "Here you can manage your account settings.",
      "Additional Resources": "Additional Resources",
      Monday: "Monday",
      Tuesday: "Tuesday",
      Wednesday: "Wednesday",
      Thursday: "Thursday",
      Friday: "Friday",
      Saturday: "Saturday",
      Sunday: "Sunday",
      "Booking Conflict": "Booking Conflict",
      "This time slot is already booked. Please choose another time.":
        "This time slot is already booked. Please choose another time.",
      Close: "Close",
      "Booking Management": "Booking Management",
      Calendar: "Calendar",
      "No bookings for this day.": "No bookings for this day.",
      "Time:": "Time:",
      "Service:": "Service:",
      Tariffs: "Tariffs",
      "Choose the most suitable plan:": "Choose the most suitable plan:",
      Purchase: "Purchase",
    },
  },
  ru: {
    translation: {
      Settings: "Настройки",
      "Primary Color": "Основной цвет",
      "Choose the primary color for your widget.":
        "Выберите основной цвет вашего виджета.",
      "Secondary Color": "Второстепенный цвет",
      "Choose the secondary color for your widget.":
        "Выберите второстепенный цвет вашего виджета.",
      "Widget Title": "Заголовок виджета",
      "Enter the title for your widget.":
        "Введите заголовок для вашего виджета.",
      Logo: "Логотип",
      "Upload a logo for your widget.": "Загрузите логотип для вашего виджета.",
      "Upload Logo": "Загрузить логотип",
      "Date Format": "Формат даты",
      "Choose the date format for your widget.":
        "Выберите формат отображения даты.",
      "Working Hours": "Время работы",
      "Specify the working hours of your business.":
        "Укажите время работы вашего бизнеса.",
      "Start Time": "Начало работы",
      "End Time": "Конец работы",
      "Enable Notifications": "Включить уведомления",
      "Enable to receive notifications for new bookings.":
        "Включите, чтобы получать уведомления о новых бронированиях.",
      "Enable Booking History": "Включить историю бронирований",
      "Enable to view the booking history.":
        "Включите, чтобы видеть историю ваших бронирований.",
      "Save Settings": "Сохранить настройки",
      "Booking successful.": "Бронирование успешно.",
      "Booking failed.": "Ошибка бронирования.",
      "Book a Service": "Забронировать услугу",
      Name: "Имя",
      Email: "Электронная почта",
      Service: "Услуга",
      Date: "Дата",
      Time: "Время",
      "Book Now": "Забронировать",
      "Booking History": "История бронирований",
      Search: "Поиск",
      ID: "ID",
      "Customer Reviews": "Отзывы клиентов",
      "Leave a Review": "Оставить отзыв",
      "Your Name": "Ваше имя",
      "Your Review": "Ваш отзыв",
      "Submit Review": "Отправить отзыв",
      "Admin Dashboard": "Панель управления",
      Bookings: "Бронирования",
      "Booking Analytics": "Аналитика бронирований",
      Period: "Период",
      Day: "День",
      Week: "Неделя",
      Month: "Месяц",
      "Number of Bookings": "Количество бронирований",
      "Generate Report": "Сгенерировать отчет",
      Actions: "Действия",
      Edit: "Редактировать",
      Delete: "Удалить",
      "Enter new name:": "Введите новое имя:",
      "Booking updated successfully": "Бронирование успешно обновлено",
      "Error updating booking": "Ошибка обновления бронирования",
      "Are you sure you want to delete this booking?":
        "Вы уверены, что хотите удалить это бронирование?",
      "Booking deleted successfully": "Бронирование успешно удалено",
      "Error deleting booking": "Ошибка удаления бронирования",
      "Booking Page": "Страница бронирования",
      "Shop Settings": "Настройки магазина",
      Domain: "Домен",
      "Shop Name": "Название магазина",
      "Settings saved successfully": "Настройки успешно сохранены",
      "Error saving settings": "Ошибка сохранения настроек",
      "Enter new account email:":
        "Введите новый адрес электронной почты учетной записи:",
      "Shop transferred successfully": "Магазин успешно передан",
      "Error transferring shop": "Ошибка передачи магазина",
      "Are you sure you want to delete this shop?":
        "Вы уверены, что хотите удалить этот магазин?",
      "Shop deleted successfully": "Магазин успешно удален",
      "Error deleting shop": "Ошибка удаления магазина",
      "Transfer Shop": "Передать магазин",
      "Delete Shop": "Удалить магазин",
      "Sign Up": "Регистрация",
      Username: "Имя пользователя",
      Password: "Пароль",
      "Confirm Password": "Подтвердите пароль",
      "Passwords do not match": "Пароли не совпадают",
      "Registration successful": "Регистрация прошла успешно",
      "Error during registration": "Ошибка при регистрации",
      "Already have an account? Sign in": "Уже есть аккаунт? Войти",
      Login: "Войти",
      "Don't have an account?": "Нет аккаунта?",
      "Or sign up with social media":
        "Или зарегистрируйтесь через социальные сети",
      "Create a Booking": "Создать бронирование",
      "Personal Information": "Персональная информация",
      "Booking Details": "Детали бронирования",
      "Report generated successfully.": "Отчет успешно сгенерирован.",
      "Account Settings": "Настройки аккаунта",
      "Update account settings": "Обновить настройки аккаунта",
      "Error fetching shop settings": "Ошибка при получении настроек магазина",
      Documentation: "Документация",
      "Welcome to the BookNest project documentation.":
        "Добро пожаловать в документацию по проекту BookNest.",
      "Here you can manage your account settings.":
        "Здесь вы можете управлять настройками вашего аккаунта.",
      "Additional Resources": "Дополнительные ресурсы",
      Monday: "Понедельник",
      Tuesday: "Вторник",
      Wednesday: "Среда",
      Thursday: "Четверг",
      Friday: "Пятница",
      Saturday: "Суббота",
      Sunday: "Воскресенье",
      "Booking Conflict": "Конфликт времени бронирования",
      "This time slot is already booked. Please choose another time.":
        "Выбранное вами время уже забронировано. Пожалуйста, выберите другое время.",
      Close: "Закрыть",
      "Booking Management": "Управление бронированиями",
      Calendar: "Календарь",
      "No bookings for this day.": "Нет бронирований на этот день.",
      "Time:": "Время:",
      "Service:": "Услуга:",
      Tariffs: "Тарифы",
      "Choose the most suitable plan:":
        "Выберите наиболее подходящий тарифный план:",
      Purchase: "Приобрести",
    },
  },
  fr: {
    translation: {
      Settings: "Paramètres",
      "Primary Color": "Couleur principale",
      "Choose the primary color for your widget.":
        "Choisissez la couleur principale de votre widget.",
      "Secondary Color": "Couleur secondaire",
      "Choose the secondary color for your widget.":
        "Choisissez la couleur secondaire de votre widget.",
      "Widget Title": "Titre du widget",
      "Enter the title for your widget.": "Entrez le titre de votre widget.",
      Logo: "Logo",
      "Upload a logo for your widget.":
        "Téléchargez un logo pour votre widget.",
      "Upload Logo": "Télécharger le logo",
      "Date Format": "Format de date",
      "Choose the date format for your widget.":
        "Choisissez le format de date de votre widget.",
      "Working Hours": "Heures de travail",
      "Specify the working hours of your business.":
        "Indiquez les heures de travail de votre entreprise.",
      "Start Time": "Heure de début",
      "End Time": "Heure de fin",
      "Enable Notifications": "Activer les notifications",
      "Enable to receive notifications for new bookings.":
        "Activer pour recevoir des notifications pour les nouvelles réservations.",
      "Enable Booking History": "Activer l'historique des réservations",
      "Enable to view the booking history.":
        "Activer pour voir l'historique des réservations.",
      "Save Settings": "Enregistrer les paramètres",
      "Booking successful.": "Réservation réussie.",
      "Booking failed.": "Échec de la réservation.",
      "Book a Service": "Réserver un service",
      Name: "Nom",
      Email: "E-mail",
      Service: "Service",
      Date: "Date",
      Time: "Heure",
      "Book Now": "Réservez maintenant",
      "Booking History": "Historique des réservations",
      Search: "Recherche",
      ID: "ID",
      "Customer Reviews": "Avis des clients",
      "Leave a Review": "Laisser un avis",
      "Your Name": "Votre nom",
      "Your Review": "Votre avis",
      "Submit Review": "Soumettre un avis",
      "Admin Dashboard": "Tableau de bord admin",
      Bookings: "Réservations",
      "Booking Analytics": "Analytique des réservations",
      Period: "Période",
      Day: "Jour",
      Week: "Semaine",
      Month: "Mois",
      "Number of Bookings": "Nombre de réservations",
      "Generate Report": "Générer un rapport",
      Actions: "Actions",
      Edit: "Modifier",
      Delete: "Supprimer",
      "Enter new name:": "Entrez un nouveau nom:",
      "Booking updated successfully": "Réservation mise à jour avec succès",
      "Error updating booking":
        "Erreur lors de la mise à jour de la réservation",
      "Are you sure you want to delete this booking?":
        "Êtes-vous sûr de vouloir supprimer cette réservation?",
      "Booking deleted successfully": "Réservation supprimée avec succès",
      "Error deleting booking":
        "Erreur lors de la suppression de la réservation",
      "Booking Page": "Page de réservation",
      "Shop Settings": "Paramètres du magasin",
      Domain: "Domaine",
      "Shop Name": "Nom du magasin",
      "Settings saved successfully": "Paramètres enregistrés avec succès",
      "Error saving settings": "Erreur lors de l'enregistrement des paramètres",
      "Enter new account email:": "Entrez le nouvel e-mail du compte:",
      "Shop transferred successfully": "Magasin transféré avec succès",
      "Error transferring shop": "Erreur lors du transfert du magasin",
      "Are you sure you want to delete this shop?":
        "Êtes-vous sûr de vouloir supprimer ce magasin?",
      "Shop deleted successfully": "Magasin supprimé avec succès",
      "Error deleting shop": "Erreur lors de la suppression du magasin",
      "Transfer Shop": "Transférer le magasin",
      "Delete Shop": "Supprimer le magasin",
      "Sign Up": "S'inscrire",
      Username: "Nom d'utilisateur",
      Password: "Mot de passe",
      "Confirm Password": "Confirmez le mot de passe",
      "Passwords do not match": "Les mots de passe ne correspondent pas",
      "Registration successful": "Inscription réussie",
      "Error during registration": "Erreur lors de l'inscription",
      "Already have an account? Sign in":
        "Vous avez déjà un compte ? Connectez-vous",
      Login: "Connexion",
      "Don't have an account?": "Vous n'avez pas de compte?",
      "Or sign up with social media":
        "Ou inscrivez-vous avec les réseaux sociaux",
      "Create a Booking": "Créer une réservation",
      "Personal Information": "Informations personnelles",
      "Booking Details": "Détails de la réservation",
      "Report generated successfully.": "Rapport généré avec succès.",
      "Account Settings": "Paramètres du compte",
      "Update account settings": "Mettre à jour les paramètres du compte",
      "Error fetching shop settings":
        "Erreur lors de la récupération des paramètres du magasin",
      Documentation: "Documentation",
      "Welcome to the BookNest project documentation.":
        "Bienvenue dans la documentation du projet BookNest.",
      "Here you can manage your account settings.":
        "Ici, vous pouvez gérer les paramètres de votre compte.",
      "Additional Resources": "Ressources supplémentaires",
      Monday: "Lundi",
      Tuesday: "Mardi",
      Wednesday: "Mercredi",
      Thursday: "Jeudi",
      Friday: "Vendredi",
      Saturday: "Samedi",
      Sunday: "Dimanche",
      "Booking Conflict": "Conflit de réservation",
      "This time slot is already booked. Please choose another time.":
        "Ce créneau horaire est déjà réservé. Veuillez choisir un autre moment.",
      Close: "Fermer",
      "Booking Management": "Gestion des réservations",
      Calendar: "Calendrier",
      "No bookings for this day.": "Aucune réservation pour ce jour.",
      "Time:": "Heure :",
      "Service:": "Service :",
      Tariffs: "Tarifs",
      "Choose the most suitable plan:": "Choisissez le plan le plus adapté :",
      Purchase: "Acheter",
    },
  },
  de: {
    translation: {
      Settings: "Einstellungen",
      "Primary Color": "Primärfarbe",
      "Choose the primary color for your widget.":
        "Wählen Sie die Primärfarbe für Ihr Widget.",
      "Secondary Color": "Sekundärfarbe",
      "Choose the secondary color for your widget.":
        "Wählen Sie die Sekundärfarbe für Ihr Widget.",
      "Widget Title": "Widget-Titel",
      "Enter the title for your widget.":
        "Geben Sie den Titel für Ihr Widget ein.",
      Logo: "Logo",
      "Upload a logo for your widget.":
        "Laden Sie ein Logo für Ihr Widget hoch.",
      "Upload Logo": "Logo hochladen",
      "Date Format": "Datumsformat",
      "Choose the date format for your widget.":
        "Wählen Sie das Datumsformat für Ihr Widget.",
      "Working Hours": "Arbeitszeiten",
      "Specify the working hours of your business.":
        "Geben Sie die Arbeitszeiten Ihres Unternehmens an.",
      "Start Time": "Anfangszeit",
      "End Time": "Endzeit",
      "Enable Notifications": "Benachrichtigungen aktivieren",
      "Enable to receive notifications for new bookings.":
        "Aktivieren, um Benachrichtigungen für neue Buchungen zu erhalten.",
      "Enable Booking History": "Buchungsverlauf aktivieren",
      "Enable to view the booking history.":
        "Aktivieren, um den Buchungsverlauf anzuzeigen.",
      "Save Settings": "Einstellungen speichern",
      "Booking successful.": "Buchung erfolgreich.",
      "Booking failed.": "Buchung fehlgeschlagen.",
      "Book a Service": "Dienstleistung buchen",
      Name: "Name",
      Email: "E-Mail",
      Service: "Dienst",
      Date: "Datum",
      Time: "Uhrzeit",
      "Book Now": "Jetzt buchen",
      "Booking History": "Buchungsverlauf",
      Search: "Suche",
      ID: "ID",
      "Customer Reviews": "Kundenbewertungen",
      "Leave a Review": "Eine Bewertung abgeben",
      "Your Name": "Ihr Name",
      "Your Review": "Ihre Bewertung",
      "Submit Review": "Bewertung abgeben",
      "Admin Dashboard": "Admin-Dashboard",
      Bookings: "Buchungen",
      "Booking Analytics": "Buchungsanalyse",
      Period: "Zeitraum",
      Day: "Tag",
      Week: "Woche",
      Month: "Monat",
      "Number of Bookings": "Anzahl der Buchungen",
      "Generate Report": "Bericht erstellen",
      Actions: "Aktionen",
      Edit: "Bearbeiten",
      Delete: "Löschen",
      "Enter new name:": "Neuen Namen eingeben:",
      "Booking updated successfully": "Buchung erfolgreich aktualisiert",
      "Error updating booking": "Fehler bei der Aktualisierung der Buchung",
      "Are you sure you want to delete this booking?":
        "Sind Sie sicher, dass Sie diese Buchung löschen möchten?",
      "Booking deleted successfully": "Buchung erfolgreich gelöscht",
      "Error deleting booking": "Fehler beim Löschen der Buchung",
      "Booking Page": "Buchungsseite",
      "Shop Settings": "Shop-Einstellungen",
      Domain: "Domain",
      "Shop Name": "Name des Shops",
      "Settings saved successfully": "Einstellungen erfolgreich gespeichert",
      "Error saving settings": "Fehler beim Speichern der Einstellungen",
      "Enter new account email:":
        "Geben Sie die neue E-Mail-Adresse des Kontos ein:",
      "Shop transferred successfully": "Shop erfolgreich übertragen",
      "Error transferring shop": "Fehler beim Übertragen des Shops",
      "Are you sure you want to delete this shop?":
        "Sind Sie sicher, dass Sie diesen Shop löschen möchten?",
      "Shop deleted successfully": "Shop erfolgreich gelöscht",
      "Error deleting shop": "Fehler beim Löschen des Shops",
      "Transfer Shop": "Shop übertragen",
      "Delete Shop": "Shop löschen",
      "Sign Up": "Anmelden",
      Username: "Benutzername",
      Password: "Passwort",
      "Confirm Password": "Passwort bestätigen",
      "Passwords do not match": "Passwörter stimmen nicht überein",
      "Registration successful": "Registrierung erfolgreich",
      "Error during registration": "Fehler bei der Registrierung",
      "Already have an account? Sign in":
        "Haben Sie bereits ein Konto? Anmelden",
      Login: "Anmeldung",
      "Don't have an account?": "Haben Sie kein Konto?",
      "Or sign up with social media":
        "Oder registrieren Sie sich mit sozialen Medien",
      "Create a Booking": "Buchung erstellen",
      "Personal Information": "Persönliche Informationen",
      "Booking Details": "Buchungsdetails",
      "Report generated successfully.": "Bericht erfolgreich erstellt.",
      "Account Settings": "Kontoeinstellungen",
      "Update account settings": "Kontoeinstellungen aktualisieren",
      "Error fetching shop settings":
        "Fehler beim Abrufen der Shop-Einstellungen",
      Documentation: "Dokumentation",
      "Welcome to the BookNest project documentation.":
        "Willkommen in der Dokumentation des BookNest-Projekts.",
      "Here you can manage your account settings.":
        "Hier können Sie Ihre Kontoeinstellungen verwalten.",
      "Additional Resources": "Zusätzliche Ressourcen",
      Monday: "Montag",
      Tuesday: "Dienstag",
      Wednesday: "Mittwoch",
      Thursday: "Donnerstag",
      Friday: "Freitag",
      Saturday: "Samstag",
      Sunday: "Sonntag",
      "Booking Conflict": "Buchungskonflikt",
      "This time slot is already booked. Please choose another time.":
        "Dieser Zeitfenster ist bereits gebucht. Bitte wählen Sie eine andere Zeit.",
      Close: "Schließen",
      "Booking Management": "Buchungsmanagement",
      Calendar: "Kalender",
      "No bookings for this day.": "Keine Buchungen für diesen Tag.",
      "Time:": "Zeit:",
      "Service:": "Dienst:",
      Tariffs: "Tarife",
      "Choose the most suitable plan:":
        "Wählen Sie den am besten geeigneten Tarif:",
      Purchase: "Kaufen",
    },
  },
  es: {
    translation: {
      Settings: "Configuraciones",
      "Primary Color": "Color primario",
      "Choose the primary color for your widget.":
        "Elija el color primario para su widget.",
      "Secondary Color": "Color secundario",
      "Choose the secondary color for your widget.":
        "Elija el color secundario para su widget.",
      "Widget Title": "Título del widget",
      "Enter the title for your widget.": "Ingrese el título de su widget.",
      Logo: "Logotipo",
      "Upload a logo for your widget.": "Cargue un logotipo para su widget.",
      "Upload Logo": "Cargar logotipo",
      "Date Format": "Formato de fecha",
      "Choose the date format for your widget.":
        "Elija el formato de fecha para su widget.",
      "Working Hours": "Horas de trabajo",
      "Specify the working hours of your business.":
        "Especifique las horas de trabajo de su empresa.",
      "Start Time": "Hora de inicio",
      "End Time": "Hora de finalización",
      "Enable Notifications": "Habilitar notificaciones",
      "Enable to receive notifications for new bookings.":
        "Habilite para recibir notificaciones de nuevas reservas.",
      "Enable Booking History": "Habilitar historial de reservas",
      "Enable to view the booking history.":
        "Habilite para ver el historial de reservas.",
      "Save Settings": "Guardar configuraciones",
      "Booking successful.": "Reserva exitosa.",
      "Booking failed.": "Reserva fallida.",
      "Book a Service": "Reservar un servicio",
      Name: "Nombre",
      Email: "Correo electrónico",
      Service: "Servicio",
      Date: "Fecha",
      Time: "Hora",
      "Book Now": "Reservar ahora",
      "Booking History": "Historial de reservas",
      Search: "Buscar",
      ID: "ID",
      "Customer Reviews": "Reseñas de clientes",
      "Leave a Review": "Dejar una reseña",
      "Your Name": "Tu nombre",
      "Your Review": "Tu reseña",
      "Submit Review": "Enviar reseña",
      "Admin Dashboard": "Panel de administración",
      Bookings: "Reservas",
      "Booking Analytics": "Análisis de reservas",
      Period: "Periodo",
      Day: "Día",
      Week: "Semana",
      Month: "Mes",
      "Number of Bookings": "Número de reservas",
      "Generate Report": "Generar informe",
      Actions: "Acciones",
      Edit: "Editar",
      Delete: "Eliminar",
      "Enter new name:": "Ingrese un nuevo nombre:",
      "Booking updated successfully": "Reserva actualizada con éxito",
      "Error updating booking": "Error al actualizar la reserva",
      "Are you sure you want to delete this booking?":
        "¿Está seguro de que desea eliminar esta reserva?",
      "Booking deleted successfully": "Reserva eliminada con éxito",
      "Error deleting booking": "Error al eliminar la reserva",
      "Booking Page": "Página de reservas",
      "Shop Settings": "Configuración de la tienda",
      Domain: "Dominio",
      "Shop Name": "Nombre de la tienda",
      "Settings saved successfully": "Configuración guardada con éxito",
      "Error saving settings": "Error al guardar la configuración",
      "Enter new account email:":
        "Ingrese el nuevo correo electrónico de la cuenta:",
      "Shop transferred successfully": "Tienda transferida con éxito",
      "Error transferring shop": "Error al transferir la tienda",
      "Are you sure you want to delete this shop?":
        "¿Está seguro de que desea eliminar esta tienda?",
      "Shop deleted successfully": "Tienda eliminada con éxito",
      "Error deleting shop": "Error al eliminar la tienda",
      "Transfer Shop": "Transferir tienda",
      "Delete Shop": "Eliminar tienda",
      "Sign Up": "Registrarse",
      Username: "Nombre de usuario",
      Password: "Contraseña",
      "Confirm Password": "Confirmar contraseña",
      "Passwords do not match": "Las contraseñas no coinciden",
      "Registration successful": "Registro exitoso",
      "Error during registration": "Error durante el registro",
      "Already have an account? Sign in":
        "¿Ya tienes una cuenta? Iniciar sesión",
      Login: "Iniciar sesión",
      "Don't have an account?": "¿No tienes una cuenta?",
      "Or sign up with social media": "O regístrate con las redes sociales",
      "Create a Booking": "Crear una reserva",
      "Personal Information": "Información personal",
      "Booking Details": "Detalles de la reserva",
      "Report generated successfully.": "Informe generado con éxito.",
      "Account Settings": "Configuración de la cuenta",
      "Update account settings": "Actualizar configuración de la cuenta",
      "Error fetching shop settings":
        "Error al obtener la configuración de la tienda",
      Documentation: "Documentación",
      "Welcome to the BookNest project documentation.":
        "Bienvenido a la documentación del proyecto BookNest.",
      "Here you can manage your account settings.":
        "Aquí puedes gestionar la configuración de tu cuenta.",
      "Additional Resources": "Recursos adicionales",
      Monday: "Lunes",
      Tuesday: "Martes",
      Wednesday: "Miércoles",
      Thursday: "Jueves",
      Friday: "Viernes",
      Saturday: "Sábado",
      Sunday: "Domingo",
      "Booking Conflict": "Conflicto de reserva",
      "This time slot is already booked. Please choose another time.":
        "Este intervalo de tiempo ya está reservado. Por favor, elija otra hora.",
      Close: "Cerrar",
      "Booking Management": "Gestión de reservas",
      Calendar: "Calendario",
      "No bookings for this day.": "No hay reservas para este día.",
      "Time:": "Hora:",
      "Service:": "Servicio:",
      Tariffs: "Tarifas",
      "Choose the most suitable plan:": "Elige el plan más adecuado:",
      Purchase: "Comprar",
    },
  },
  zh: {
    translation: {
      Settings: "设置",
      "Primary Color": "主要颜色",
      "Choose the primary color for your widget.": "选择您的小部件的主要颜色。",
      "Secondary Color": "次要颜色",
      "Choose the secondary color for your widget.":
        "选择您的小部件的次要颜色。",
      "Widget Title": "小部件标题",
      "Enter the title for your widget.": "输入您的小部件标题。",
      Logo: "徽标",
      "Upload a logo for your widget.": "为您的小部件上传徽标。",
      "Upload Logo": "上传徽标",
      "Date Format": "日期格式",
      "Choose the date format for your widget.": "选择您的小部件的日期格式。",
      "Working Hours": "工作时间",
      "Specify the working hours of your business.": "指定您的业务的工作时间。",
      "Start Time": "开始时间",
      "End Time": "结束时间",
      "Enable Notifications": "启用通知",
      "Enable to receive notifications for new bookings.":
        "启用以接收新预订的通知。",
      "Enable Booking History": "启用预订历史记录",
      "Enable to view the booking history.": "启用以查看预订历史记录。",
      "Save Settings": "保存设置",
      "Booking successful.": "预订成功。",
      "Booking failed.": "预订失败。",
      "Book a Service": "预订服务",
      Name: "名字",
      Email: "电子邮件",
      Service: "服务",
      Date: "日期",
      Time: "时间",
      "Book Now": "立即预订",
      "Booking History": "预订历史",
      Search: "搜索",
      ID: "ID",
      "Customer Reviews": "客户评价",
      "Leave a Review": "留下评论",
      "Your Name": "你的名字",
      "Your Review": "你的评论",
      "Submit Review": "提交评论",
      "Admin Dashboard": "管理面板",
      Bookings: "预订",
      "Booking Analytics": "预订分析",
      Period: "周期",
      Day: "天",
      Week: "周",
      Month: "月",
      "Number of Bookings": "预订数量",
      "Generate Report": "生成报告",
      Actions: "操作",
      Edit: "编辑",
      Delete: "删除",
      "Enter new name:": "输入新名称：",
      "Booking updated successfully": "预订成功更新",
      "Error updating booking": "更新预订时出错",
      "Are you sure you want to delete this booking?": "您确定要删除此预订吗？",
      "Booking deleted successfully": "预订已成功删除",
      "Error deleting booking": "删除预订时出错",
      "Booking Page": "预订页面",
      "Shop Settings": "商店设置",
      Domain: "域",
      "Shop Name": "商店名称",
      "Settings saved successfully": "设置保存成功",
      "Error saving settings": "保存设置时出错",
      "Enter new account email:": "输入新账户电子邮件：",
      "Shop transferred successfully": "商店成功转让",
      "Error transferring shop": "转让商店时出错",
      "Are you sure you want to delete this shop?": "您确定要删除此商店吗？",
      "Shop deleted successfully": "商店已成功删除",
      "Error deleting shop": "删除商店时出错",
      "Transfer Shop": "转让商店",
      "Delete Shop": "删除商店",
      "Sign Up": "注册",
      Username: "用户名",
      Password: "密码",
      "Confirm Password": "确认密码",
      "Passwords do not match": "密码不匹配",
      "Registration successful": "注册成功",
      "Error during registration": "注册过程中出错",
      "Already have an account? Sign in": "已经有帐户了？登录",
      Login: "登录",
      "Don't have an account?": "还没有账户？",
      "Or sign up with social media": "或通过社交媒体注册",
      "Create a Booking": "创建预订",
      "Personal Information": "个人信息",
      "Booking Details": "预订详情",
      "Report generated successfully.": "报告生成成功。",
      "Account Settings": "账户设置",
      "Update account settings": "更新账户设置",
      "Error fetching shop settings": "获取商店设置时出错",
      Documentation: "文档",
      "Welcome to the BookNest project documentation.":
        "欢迎来到BookNest项目文档。",
      "Here you can manage your account settings.":
        "在这里您可以管理您的帐户设置。",
      "Additional Resources": "附加资源",
      Monday: "星期一",
      Tuesday: "星期二",
      Wednesday: "星期三",
      Thursday: "星期四",
      Friday: "星期五",
      Saturday: "星期六",
      Sunday: "星期日",
      "Booking Conflict": "予約の競合",
      "This time slot is already booked. Please choose another time.":
        "この時間帯はすでに予約されています。別の時間を選んでください。",
      Close: "閉じる",
      "Booking Management": "予約管理",
      Calendar: "カレンダー",
      "No bookings for this day.": "この日の予約はありません。",
      "Time:": "時間:",
      "Service:": "サービス:",
      Tariffs: "价格表",
      "Choose the most suitable plan:": "选择最适合的计划：",
      Purchase: "购买",
    },
  },
  ja: {
    translation: {
      Settings: "設定",
      "Primary Color": "主要な色",
      "Choose the primary color for your widget.":
        "ウィジェットの主要な色を選択してください。",
      "Secondary Color": "二次色",
      "Choose the secondary color for your widget.":
        "ウィジェットの二次色を選択してください。",
      "Widget Title": "ウィジェットのタイトル",
      "Enter the title for your widget.":
        "ウィジェットのタイトルを入力してください。",
      Logo: "ロゴ",
      "Upload a logo for your widget.":
        "ウィジェット用のロゴをアップロードします。",
      "Upload Logo": "ロゴをアップロード",
      "Date Format": "日付形式",
      "Choose the date format for your widget.":
        "ウィジェットの日付形式を選択してください。",
      "Working Hours": "営業時間",
      "Specify the working hours of your business.":
        "営業日の営業時間を指定してください。",
      "Start Time": "開始時間",
      "End Time": "終了時間",
      "Enable Notifications": "通知を有効にする",
      "Enable to receive notifications for new bookings.":
        "新しい予約の通知を受け取るには有効にします。",
      "Enable Booking History": "予約履歴を有効にする",
      "Enable to view the booking history.":
        "予約履歴を表示するには有効にします。",
      "Save Settings": "設定を保存",
      "Booking successful.": "予約成功。",
      "Booking failed.": "予約に失敗しました。",
      "Book a Service": "サービスを予約する",
      Name: "名前",
      Email: "電子メール",
      Service: "サービス",
      Date: "日付",
      Time: "時間",
      "Book Now": "今予約する",
      "Booking History": "予約履歴",
      Search: "検索",
      ID: "ID",
      "Customer Reviews": "顧客のレビュー",
      "Leave a Review": "レビューを残す",
      "Your Name": "あなたの名前",
      "Your Review": "あなたのレビュー",
      "Submit Review": "レビューを送信",
      "Admin Dashboard": "管理ダッシュボード",
      Bookings: "予約",
      "Booking Analytics": "予約分析",
      Period: "期間",
      Day: "日",
      Week: "週",
      Month: "月",
      "Number of Bookings": "予約数",
      "Generate Report": "レポートを生成",
      Actions: "アクション",
      Edit: "編集",
      Delete: "削除",
      "Enter new name:": "新しい名前を入力してください:",
      "Booking updated successfully": "予約が正常に更新されました",
      "Error updating booking": "予約の更新中にエラーが発生しました",
      "Are you sure you want to delete this booking?":
        "この予約を削除してもよろしいですか？",
      "Booking deleted successfully": "予約は正常に削除されました",
      "Error deleting booking": "予約の削除中にエラーが発生しました",
      "Booking Page": "予約ページ",
      "Shop Settings": "ショップ設定",
      Domain: "ドメイン",
      "Shop Name": "ショップ名",
      "Settings saved successfully": "設定が正常に保存されました",
      "Error saving settings": "設定の保存中にエラーが発生しました",
      "Enter new account email:":
        "新しいアカウントのメールアドレスを入力してください:",
      "Shop transferred successfully": "ショップが正常に転送されました",
      "Error transferring shop": "ショップの転送中にエラーが発生しました",
      "Are you sure you want to delete this shop?":
        "このショップを削除してもよろしいですか？",
      "Shop deleted successfully": "ショップが正常に削除されました",
      "Error deleting shop": "ショップの削除中にエラーが発生しました",
      "Transfer Shop": "ショップを転送する",
      "Delete Shop": "ショップを削除する",
      "Sign Up": "登録",
      Username: "ユーザー名",
      Password: "パスワード",
      "Confirm Password": "パスワードを認証する",
      "Passwords do not match": "パスワードが一致しません",
      "Registration successful": "登録成功",
      "Error during registration": "登録中にエラーが発生しました",
      "Already have an account? Sign in":
        "すでにアカウントをお持ちですか？ サインイン",
      Login: "ログイン",
      "Don't have an account?": "アカウントを持っていない？",
      "Or sign up with social media":
        "または、ソーシャルメディアでサインアップ",
      "Create a Booking": "予約を作成",
      "Personal Information": "個人情報",
      "Booking Details": "予約の詳細",
      "Report generated successfully.": "レポートが正常に生成されました。",
      "Account Settings": "アカウント設定",
      "Update account settings": "アカウント設定を更新",
      "Error fetching shop settings":
        "ショップ設定の取得中にエラーが発生しました",
      Documentation: "ドキュメント",
      "Welcome to the BookNest project documentation.":
        "BookNestプロジェクトのドキュメントへようこそ。",
      "Here you can manage your account settings.":
        "ここでアカウント設定を管理できます。",
      "Additional Resources": "追加リソース",
      Monday: "月曜日",
      Tuesday: "火曜日",
      Wednesday: "水曜日",
      Thursday: "木曜日",
      Friday: "金曜日",
      Saturday: "土曜日",
      Sunday: "日曜日",
      "Booking Conflict": "预订冲突",
      "This time slot is already booked. Please choose another time.":
        "此时间段已被预订。请选择其他时间。",
      Close: "关闭",
      "Booking Management": "预订管理",
      Calendar: "日历",
      "No bookings for this day.": "当天没有预订。",
      "Time:": "时间:",
      "Service:": "服务:",
      Tariffs: "料金プラン",
      "Choose the most suitable plan:": "最適なプランを選択してください：",
      Purchase: "購入",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ru",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;