import { MyListsPage } from "./MyListsPage";

export const HistoryPage = () => {
  return (
    <MyListsPage history={true}>
      <h1>Historial</h1>
    </MyListsPage>
  );
};

export default HistoryPage;
