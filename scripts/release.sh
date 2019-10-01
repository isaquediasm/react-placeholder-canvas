setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
}

make_semantic_tag() {
    git checkout master
    yarn run semantic-release
}

push() {
  git push origin master
}

setup_git
make_semantic_tag
push