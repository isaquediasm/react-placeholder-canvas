make_semantic_tag() {
    git checkout master
    yarn run semantic-release
}

push_changes() {
  git push origin master
}

make_semantic_tag
push_changes