dotfiles="$HOME/src/github.com/zakuro9715/dotfiles"
if [[ -n $dotfiles ]]
then
  git clone git@github.com:zakuro9715/dotfiles $dotfiles
fi
curl https://raw.githubusercontent.com/zakuro9716/dotfiles/master/install.zsh
