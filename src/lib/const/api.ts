import { PUBLIC_BASE_URL,PUBLIC_FILE_PATH, PUBLIC_FRONTEND_URL} from "$env/static/public";
export const BASE_URL=PUBLIC_BASE_URL;
export const FRONTEND_URL= PUBLIC_FRONTEND_URL;
// export const FRONTEND_URL='http://localhost:5173'
const API=`${BASE_URL}/api`;
export const CATEGORIES=`${API}/categories`;
export const TAGS=`${API}/tags`;
export const POSTS=`${API}/posts`;
export const LATEST=`${API}/home`;
export const IMAGE_PATH=`${BASE_URL}/${PUBLIC_FILE_PATH}`
export default API
