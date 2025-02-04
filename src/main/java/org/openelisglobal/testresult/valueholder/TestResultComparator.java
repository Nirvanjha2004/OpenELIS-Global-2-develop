/**
 * The contents of this file are subject to the Mozilla Public License Version 1.1 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy of the
 * License at http://www.mozilla.org/MPL/
 *
 * <p>Software distributed under the License is distributed on an "AS IS" basis, WITHOUT WARRANTY OF
 * ANY KIND, either express or implied. See the License for the specific language governing rights
 * and limitations under the License.
 *
 * <p>The Original Code is OpenELIS code.
 *
 * <p>Copyright (C) The Minnesota Department of Health. All Rights Reserved.
 */
package org.openelisglobal.testresult.valueholder;

import java.util.Comparator;

public class TestResultComparator implements Comparable {
    String name;

    // You can put the default sorting capability here
    public int compareTo(Object obj) {
        TestResult tr = (TestResult) obj;
        return this.name.compareTo(tr.getValue());
    }

    public static final Comparator VALUE_COMPARATOR = new Comparator() {
        public int compare(Object a, Object b) {
            TestResult tr_a = (TestResult) a;
            TestResult tr_b = (TestResult) b;

            return (((tr_a.getValue()).toLowerCase()).compareTo((tr_b.getValue()).toLowerCase()));
        }
    };
}
