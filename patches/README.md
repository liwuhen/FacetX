# Dependency patches

FacetX applies dependency patches through Yarn. The root and workspace manifests reference active patches with `patch:` entries. When updating one, run `yarn install` and commit the updated patch and lockfile together.
