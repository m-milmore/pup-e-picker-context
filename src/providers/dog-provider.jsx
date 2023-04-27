import React, { useState, useEffect, useContext, createContext } from "react";
import { getDogs } from "../api/get-dogs";
import { createDog } from "../api/create-dog";
import { removeDog } from "../api/delete-dog";
import { updateFavoriteForDog } from "../api/update-dog";

const DogsContext = createContext({});

export const DogsProvider = ({ children }) => {
  const [dogs, setDogs] = useState([]);
  const [showComponent, setShowComponent] = useState("all-dogs");

  const unfavorited = dogs.filter((dog) => !dog.isFavorite);
  const favorited = dogs.filter((dog) => dog.isFavorite);

  let filteredDogs = (() => {
    if (showComponent === "favorite-dogs") {
      return favorited;
    }

    if (showComponent === "unfavorite-dogs") {
      return unfavorited;
    }
    return dogs;
  })();

  const refetch = () => {
    getDogs().then(setDogs);
  };

  useEffect(() => {
    refetch();
  }, []);

  const addDog = (dog) => {
    createDog({
      name: dog.name,
      description: dog.description,
      image: dog.image,
    }).then((response) => {
      if (!response.ok) {
        alert("Server error");
        return;
      }
      refetch();
    });
  };

  const deleteDog = (dogId) => {
    removeDog(dogId).then((response) => {
      if (!response.ok) {
        alert("Server error");
        return;
      }
      refetch();
    });
  };

  const unfavoriteDog = (dogId) => {
    updateFavoriteForDog({ dogId, isFavorite: false }).then((response) => {
      if (!response.ok) {
        alert("Server error");
        return;
      }
      refetch();
    });
  };

  const favoriteDog = (dogId) => {
    updateFavoriteForDog({ dogId, isFavorite: true }).then((response) => {
      if (!response.ok) {
        alert("Server error");
        return;
      }
      refetch();
    });
  };

  const onClickFavorited = () => {
    if (showComponent === "favorite-dogs") {
      setShowComponent("all-dogs");
      return;
    }
    setShowComponent("favorite-dogs");
  };

  const onClickUnfavorited = () => {
    if (showComponent === "unfavorite-dogs") {
      setShowComponent("all-dogs");
      return;
    }
    setShowComponent("unfavorite-dogs");
  };

  const onClickCreateDog = () => {
    if (showComponent === "create-dog-form") {
      setShowComponent("all-dogs");
      return;
    }
    setShowComponent("create-dog-form");
  };

  return (
    <DogsContext.Provider
      value={{
        addDog,
        deleteDog,
        unfavoriteDog,
        favoriteDog,
        filteredDogs,
        unfavorited,
        favorited,
        showComponent,
        onClickFavorited,
        onClickUnfavorited,
        onClickCreateDog,
      }}
    >
      {children}
    </DogsContext.Provider>
  );
};

export const useDogs = () => {
  return useContext(DogsContext);
};
