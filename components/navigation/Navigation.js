import NavLink from "../NavLink/NavLink";

const Navigation = () => {
  return (
      <div>
        <NavLink text={'About Us'} href={'/about'}/>
          <NavLink text={'Create New Element'} href={'/create/element'}/>
          <NavLink text={'View Element'} href={'/alkiline/element'}/>
      </div>
  )
}

export default Navigation;