# ~/.bashrc: executed by bash(1) for non-login shells.

# Note: PS1 and umask are already set in /etc/profile. You should not
# need this unless you want different defaults for root.
# PS1='${debian_chroot:+($debian_chroot)}\h:\w\$ '
# umask 022

# Define a "SHELL" environment variable so the `eval "`dircolors`"` statement
# does not complain about its absence. Note: We use the existing value of it,
# in case it is already defined and not empty.
export SHELL=$SHELL

# You may uncomment the following lines if you want `ls' to be colorized:
export LS_OPTIONS='--color=auto'
eval "`dircolors`"
alias ls='ls $LS_OPTIONS'
alias ll='ls $LS_OPTIONS -l'
alias l='ls $LS_OPTIONS -lA'
#
# Some more alias to avoid making mistakes:
alias rm='rm -i'
alias cp='cp -i'
alias mv='mv -i'

# Define aliases for some commonly-used node modules binaries. Note: I opted to
# not simply add the `node_modules/.bin` folder to the system path because I
# was concerned a future binary would use the same name as a system tool.
alias eslint='/usr/src/app/node_modules/.bin/eslint'
alias jest='/usr/src/app/node_modules/.bin/jest'
alias nest='/usr/src/app/node_modules/.bin/nest'
