import httpkerberosreq
import sys, json

print json.dumps(httpkerberosreq.main(url = sys.argv[1]))
sys.exit(0)