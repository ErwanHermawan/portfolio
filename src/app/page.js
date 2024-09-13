// -- utils
import metaTag from "@utils/metaTag";

// -- modules
import Home from "@modules/Home";

// -- metadata
const metadata = metaTag.dynamic();

// ==================
// HomePage
// ==================

const HomePage = async () => {
	return <Home />;
};

export { metadata };
export default HomePage;
