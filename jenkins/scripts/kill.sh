#ps -ef | grep test.sh | grep -v grep | awk '{print $2}' | xargs kill
set -x
kill ${cat .pidfile}
