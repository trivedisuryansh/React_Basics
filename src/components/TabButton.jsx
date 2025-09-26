export default function TabButton({children, onSelect, isSelected}){

console.log("TABBUTTON Componest Excecuting");
  return(
    <li>
      <button className = {isSelected ? 'active': undefined}onClick={onSelect}>{children}</button>
      </li>
  );
} 