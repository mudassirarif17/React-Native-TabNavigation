import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native';


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
    <ScrollView>
      <Text style={{ fontSize: 30 }}>Api Call</Text>
      {
        result?
        result.map((item)=><View style={{marginHorizontal : 5 , borderBottomWidth: 1 , borderBottomColor : "brown"}}>
        <Text>id : {item.id}</Text>
        <Text>title : {item.title}</Text>
        <Text>body : {item.body}</Text>
      </View>)
        :null
      }
    </ScrollView>
  )
}

export default App
