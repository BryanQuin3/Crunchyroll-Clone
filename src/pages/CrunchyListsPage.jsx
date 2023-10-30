import { MyListsPage } from "./MyListsPage";

export const CrunchyListsPage = () => {
  return (
    <MyListsPage crunchylists={true}>
      <div className="crunchylist-page">
        <img src="../img/empty-cr-list.webp" alt="empty crunchylist image" />
        <p>Todavía no tienes ninguna Crunchylista. ¡Vamos a crear una!</p>
        <button className="btn-crunchy ripple">Crear una nueva lista</button>
      </div>
    </MyListsPage>
  );
};

export default CrunchyListsPage;
