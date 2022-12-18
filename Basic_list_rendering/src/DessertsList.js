function DessertsList(props) {
  const dessert = props.data
    .filter(data => {
      return data.calories < 500;
    })
  
    .sort((a, b) => {
      return a.calories - b.calories;
    })

    .map(data => {
    return <li>{data.name} - {data.calories}</li>;
  })

  return (
    <ul>{dessert}</ul>
    )
}

export default DessertsList;
