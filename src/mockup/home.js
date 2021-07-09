// Remove this file after fetch API

import { mapDataToHome } from '../structure/home'
import homeData from './home.json'

export const homeProduct = homeData.result.map(mapDataToHome)