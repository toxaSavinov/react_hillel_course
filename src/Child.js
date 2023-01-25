const Child = (props) => {
console.log({props});

  return (
      <p>Child, {props.data}. Name: {props.name}</p>
  )
}

export default Child;
