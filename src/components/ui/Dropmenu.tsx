import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store/store";
import { setOpenFile } from "../../Store/features/fileTreeSlice";

interface Iprops {
  position: {
    x: number;
    y: number;
  };
  setShowMenu: (value: boolean) => void;
}

const Dropmenu = ({ position: { x, y }, setShowMenu }: Iprops) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const { openFile, tabToRemove } = useSelector((stat: RootState) => stat.tree);
  const dispatch = useDispatch();

  useEffect(() => {
    const handelClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    window.addEventListener("click", handelClickOutside);

    return () => {
      window.removeEventListener("click", handelClickOutside);
    };
  }, [setShowMenu]);

  //   Handlers

  const handlerCloseAllTap = () => {
    dispatch(setOpenFile([]));
  };

  const handlerCloseTap = () => {
    const filtered = openFile.filter((file) => file.id !== tabToRemove);
    dispatch(setOpenFile(filtered));
    setShowMenu(false);
  };

  return (
    <div ref={menuRef}>
      <ul
        className="bg-white text-black w-fit px-7 py-2 rounded-md"
        style={{ position: "absolute", left: x, top: y }}
      >
        <li onClick={handlerCloseTap}>Close </li>
        <li onClick={handlerCloseAllTap}>Close all</li>
      </ul>
    </div>
  );
};

export default Dropmenu;
