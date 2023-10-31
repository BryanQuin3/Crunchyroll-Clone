import { MyListsPage } from "./MyListsPage";
import { EmptyContent } from "../components/EmptyContent";
export const HistoryPage = () => {
  return (
    <MyListsPage history={true}>
      <EmptyContent
        srcImage="../img/empty-history.webp"
        message="Todavía no has visto ningún anime. ¡Vamos a ver uno!"
        buttonText="comenzar a explorar"
      />
    </MyListsPage>
  );
};

export default HistoryPage;
