#!/usr/bin/env bash

GENERATED="/home/mango/Documents/DistributedLab/backend_ts_template/resources"
OPENAPI_DIR="/home/mango/Documents/DistributedLab/backend_ts_template/docs/web_deploy/"
PACKAGE_NAME=resources

function printHelp {
    echo "usage: ./generate.sh [<flags>]
            script to generate resources for api

            Flags:
                  --package PACKAGE        package name of generated stuff (first line of file, by default is 'resources')
                  --image IMAGE            name of generator docker image (by default is openapi-generator)

              -h, --help                   show this help
              -p, --path-to-generate PATH  path to put generated things (by default is resources)
              -i, --input OPENAPI_DIR      path to dir where openapi.yaml is stored (by default docs/web_deploy)"
}

function generate {
    cd docs
    npm run build
    cd ..
    openapi-generator-cli generate -i ${OPENAPI_DIR}/openapi.yaml -g typescript -o ${GENERATED}
}

#echo ${OPENAPI_DIR} ${GENERATED} ${GENERATOR_IMAGE} ${PACKAGE_NAME}
generate
