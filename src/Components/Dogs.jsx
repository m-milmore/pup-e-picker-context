import { useDogs } from "../providers/dog-provider";
import { DogCard } from "./DogCard";

// Right now these dogs are constant, but in reality we should be getting these from our server
// Todo: Refactor to get rid of props (THERE SHOULD BE NO PROPS DRILLING ON THIS COMPONENT)
export const Dogs = () => {
  const { deleteDog, unfavoriteDog, favoriteDog, filteredDogs } = useDogs();
  return (
    //  the "<> </>"" are called react fragments, it's like adding all the html inside
    // without adding an actual html element
    <>
      {filteredDogs.map((dog) => (
        <DogCard
          dog={dog}
          key={dog.id}
          onTrashIconClick={() => deleteDog(dog.id)}
          onHeartClick={() => unfavoriteDog(dog.id)}
          onEmptyHeartClick={() => favoriteDog(dog.id)}
        />
      ))}
    </>
  );
};
