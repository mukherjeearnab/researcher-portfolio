import QuickLinks from "./QuickLinks";
import QuickNavigation from "./QuickNavigation";

const Quicks = (props) => {
    return (
        <div className="row quicks">
            <div className="col-sm-12">
                <QuickLinks external={props.external} links={props.links} />
            </div>
            <div className="col-sm-12">
                <QuickNavigation navs={props.navs} />
            </div>
        </div>
    );
};

export default Quicks;
