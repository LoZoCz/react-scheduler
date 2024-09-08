# Aplikacja Kalendarza Wydarzeń

Ten projekt to aplikacja kalendarza zaprojektowana do zarządzania i planowania wydarzeń. Umożliwia użytkownikom tworzenie, edytowanie i usuwanie wydarzeń, z aktualizacjami w czasie rzeczywistym dzięki integracji z Firebase. Interfejs wykorzystuje Material UI do stylizacji oraz DevExpress Scheduler do funkcji planowania.

Aplikacje można sprawdzić pod tym linkiem: [link do demo](https://katherineoelsner.com/)

## Funkcje

-   Dodawanie, edytowanie i usuwanie wydarzeń
-   Pobieranie i aktualizowanie danych w czasie rzeczywistym za pomocą Firestore
-   Planowanie wydarzeń z określeniem godzin rozpoczęcia i zakończenia
-   Responsywny interfejs użytkownika z widokami kalendarza

## Lista Postępów

### Zrobione:

-   [x] &nbsp;Pobieranie danych w czasie rzeczywistym z użyciem Firestore
-   [x] &nbsp;Funkcjonalności tworzenia, edycji i usuwania wydarzeń

### Do zrobienia:

-   [ ] &nbsp;Zmiana formatu godziny na 24-godzinny zamiast AM/PM
-   [ ] &nbsp;Dostosowanie motywu i kolorystyki kalendarza przy użyciu Material UI

## Wizja na przyszłość

Planuję rozbudować ten projekt do pełnej aplikacji do zarządzania czasem, gdzie użytkownicy będą mogli organizować wszystkie aspekty swojego dnia. Oto niektóre z funkcji, które chciałbym zaimplementować:

1. **Pełna aplikacja do zarządzania czasem**:
    - **Kalendarz**: Główna funkcjonalność do planowania i śledzenia wydarzeń.
    - **Notatnik**: Miejsce do zapisywania notatek związanych z wydarzeniami lub innymi zadaniami.
    - **Timery**: Narzędzia do ustawiania liczników czasu dla różnych aktywności.
    - **Przypomnienia**: Opcje ustawiania alertów dla nadchodzących wydarzeń lub zadań.
2. **Przechowywanie danych**: Wszystkie dane będą zapisywane w bazie Firebase, aby zapewnić synchronizację w czasie rzeczywistym i trwałe przechowywanie.

3. **Autoryzacja użytkowników**: Integracja z **Clerk** w celu zapewnienia bezpiecznego logowania i zarządzania kontami użytkowników.

4. **Dodatkowe funkcje**: Narzędzia pomagające użytkownikom planować i zarządzać codziennymi aktywnościami, takie jak listy zadań, śledzenie postępów i planowanie przyszłych wydarzeń.
