import LeftMenu from "@/components/left-menu";
import UpperMenu from "@/components/upper-menu";
import ContentArea from "@/components/content-area";
import './main-layout.css';


export default function MainLayout() {
  return (
    <div className="container">
      <div className="left-side">
        <LeftMenu />
      </div>

      <div className="right-side">
        <div className="upper-menu">
          <UpperMenu />
        </div>
        <div className="content-area">
          <ContentArea />
        </div>
      </div>
    </div>
  );
}
