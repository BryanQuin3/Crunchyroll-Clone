import { MyListsPage } from "./MyListsPage";
import { EmptyContent } from "../components/EmptyContent";
export const CrunchyListsPage = () => {
  return (
    <MyListsPage crunchylists={true}>
      <EmptyContent
        srcImage="../img/empty-cr-list.webp"
        message="Todavía no tienes ninguna Crunchylista. ¡Vamos a crear una!"
        buttonText="Crear una nueva lista"
      />
    </MyListsPage>
  );
};

export default CrunchyListsPage;
