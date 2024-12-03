import { Box, Image, VStack, Text, ScrollView } from "@gluestack-ui/themed";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import app from './firebase/config';
import { GluestackUIProvider } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config"

interface Recipe {
  id: string;
  RicettaTitolo: string;
  RicettaSottotitolo: string | null;
  RicettaImmagine: string;
}

export default function Index() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const db = getFirestore(app);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'Ricette'));
        const recipesList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Recipe[];
        setRecipes(recipesList);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <GluestackUIProvider config={config}>

    <ScrollView>
      {recipes.map((recipe) => (
        <Box 
  key={recipe.id} 
  borderWidth={1} 
  borderRadius="$lg" 
  margin={8} 
  padding={16}
>      
    <Box flexDirection="row">
            <Image
              source={{ uri: recipe.RicettaImmagine || 'https://via.placeholder.com/100' }}
              alt={recipe.RicettaTitolo}
              width={100}
              height={100}              marginRight={16}
            />
            <VStack>
            <Text fontSize={18} fontWeight="$bold">{recipe.RicettaTitolo}</Text>

<Text>{recipe.RicettaSottotitolo || 'No description available'}</Text>
            </VStack>
          </Box>
        </Box>
      ))}
    </ScrollView>
    </GluestackUIProvider>

  );
}