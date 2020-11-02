import { GET_DEPENDENCY, GET_DEPENDENCY_SUCCESS, GET_PACKAGE_SUCCESS, CLAER_PACKAGES_DEPENDENCY } from './Constants';

export const getDependency = (searchString) => ({
    type: GET_DEPENDENCY,
    searchString
});

export const getDependencySuccess = (data) => ({
    type: GET_DEPENDENCY_SUCCESS,
    data
});

export const getPackage = (data) => ({
    type: GET_PACKAGE,
    data
});

export const getPackageSuccess = (data) => ({
    type: GET_PACKAGE_SUCCESS,
    data
});
export const getSearchResult = (data) => ({
    type: GET_SEARCH_RESULT,
    data
});
export const getSearchResultSuccess = (data) => ({
    type: GET_SEARCH_RESULT_SUCCESS,
    data
});

export const clearPackagesAndDependencies = () => ({
    type: CLAER_PACKAGES_DEPENDENCY,
});
