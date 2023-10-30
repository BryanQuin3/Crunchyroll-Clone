import { MyListsPage } from "./MyListsPage";

export const CrunchyListsPage = () => {
  return (
    <MyListsPage crunchylists={true}>
      <h1>CrunchyLists</h1>
    </MyListsPage>
  );
};

export default CrunchyListsPage;
