import { Component } from "react";
import { AiOutlineFileAdd } from "react-icons/ai";
import { MdOutlineDeleteOutline, MdOutlineSave } from "react-icons/md";

export default class Header extends Component {
  render() {
    return (
      <header className="pr-4 p-2 flex items-center justify-between shadow-lg bg-gray-800 w-100">
        <div className="flex items-center gap-x-2">
          <button className="headerBtn">
            <AiOutlineFileAdd />
          </button>
          <button className="headerBtn">
            <MdOutlineDeleteOutline />
          </button>
          <button className="headerBtn">
            <MdOutlineSave />
          </button>
        </div>
        <span className="logo-text">NotePad</span>
      </header>
    );
  }
}
