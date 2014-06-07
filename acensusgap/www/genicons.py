#!/usr/bin/env python

# Script to generate ios icons, this doesn't work in phonegap so we do it
# "manually"

import os
import shutil

names = [
    ["icon-36-ldpi.png", 36],
    ["icon-48-mdpi.png", 48],
    ["icon-72-hdpi.png", 72],
    ["icon-96-xhdpi.png", 96]
]

for n, s in names:
    os.system("convert -scale %s icon.png res/icon/android/%s" % (s, n))

copies = [
    ['res/icon/android/icon-48-mdpi.png', '../platforms/android/res/drawable-mdpi/icon.png'],
    ['res/icon/android/icon-72-hdpi.png', '../platforms/android/res/drawable-hdpi/icon.png'],
    ['res/icon/android/icon-36-ldpi.png', '../platforms/android/res/drawable-ldpi/icon.png'],
    ['res/icon/android/icon-96-xhdpi.png', '../platforms/android/res/drawable-xhdpi/icon.png'],
    ['res/icon/android/icon-96-xhdpi.png', '../platforms/android/res/drawable/icon.png'],
]

for s, d in copies:
    shutil.copy(s, d)
