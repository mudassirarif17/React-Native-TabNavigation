import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native';


const App = () => {
  const [result, setResult] = useState(null);

  const fetchData = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts/1";
    let data = await fetch(url);
    data = await data.json();
    // console.warn(data);
    setResult(data);
  }
  useEffect(() => {
    fetchData();
  }, [])
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Api Call</Text>
      {
        result?<View>
          <Text>id : {result.id}</Text>
          <Text>title : {result.title}</Text>
          <Text>body : {result.body}</Text>
        </View>
        :null
      }
    </View>
  )
}

export default App
