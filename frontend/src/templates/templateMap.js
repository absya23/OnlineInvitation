import ClassicTemplate from "./ClassicTemplate";
import MinimalTemplate from "./MinimalTemplate";

const templateMap = {
	// slug trong DB -> component
	"classic-elegant": ClassicTemplate,
	"minimal-modern": MinimalTemplate,
};

export default templateMap;
