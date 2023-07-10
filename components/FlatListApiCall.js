import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView , FlatList, SafeAreaView } from 'react-native';


const App = () => {
  const [result, setResult] = useState(undefined);

  const fetchData = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    let data = await fetch(url);
    data = await data.json();
    // console.warn(data);
    setResult(data);
  }
  useEffect(() => {
    fetchData();
  }, [])
  return (
    <SafeAreaView>
      <Text style={{ fontSize: 30 }}>Flat List Api Call</Text>
      {
        result?
        <FlatList
        //horizontal
        //showsHorizontalScrollIndicator={false}
        data={result}
        renderItem={({item})=><View>
          <Text>Id: {item.id}</Text>
          <Text>Title: {item.title}</Text>
          <Text>body: {item.body}</Text>
        </View>}
        />
        :null
      }
    </SafeAreaView>
  )
}

export default App
