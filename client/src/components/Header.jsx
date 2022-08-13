import { Component } from "react";
import { AiOutlineFileAdd } from "react-icons/ai";
import { MdOutlineDeleteOutline, MdOutlineSave } from "react-icons/md";

export default class Header extends Component {
  
  createNoteHandel(el){
    console.log(localStorage.getItem("id"));
  }
  
  render() {
    return (
      <header className="pr-4 border-b-gray-50 border-b-[1.5px] p-2 flex items-center justify-between shadow-lg bg-gray-800 w-100">
        <div className="flex items-center gap-x-2">
          <button onClick={this.createNoteHandel} className="headerBtn">
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
